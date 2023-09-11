import { useState, useContext } from "react"
import db from "../../firebase/firebaseConfig"
import { collection, addDoc, Timestamp, getDocs, query, where, documentId, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../context/cartContext";
import CircularIndeterminate from "../Loading"
import CheckoutForm from "../CheckoutForm";
import "./style.css"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';



const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState()
    const {cart, total, clearCart} = useContext(CartContext)

    //OBTENER DATOS DE USUARIO E IMPACTAR EN BD
    //ACTUALIZAR STOCK DE LOS PRODUCTOS EN BD
    const createOrder = async ({name, phone, email}) => {
        
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const sinStok = []
            const idsCart = cart.map( (item) => item.id )
            const productosRef = collection(db, "productos")
            const agregadosDesdeFB = await getDocs(query(productosRef, where(documentId(), "in", idsCart )))
            const {docs} = agregadosDesdeFB

            docs.forEach( item => {
                const dataDoc = item.data()
                const stockDb = dataDoc.stock
                const agregadoAlCart = cart.find( item => item.id === item.id )
                const cantidadEnCart = agregadoAlCart.cant
                if(stockDb >= cantidadEnCart){
                    const docRef = doc(db, "productos", item.id)
                    actualizarDoc(docRef, (stockDb - cantidadEnCart))
                }
                else{
                    sinStok.push({id: item.id, ...dataDoc})
                }
            } )

            if(sinStok.length === 0){
                const comprasRef = collection(db, "compras")
                const docRef = await addDoc(comprasRef, {objOrder})
                setOrderId(docRef.id)
                clearCart()
            }else{
                alert("Productos sin stock")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    
    const actualizarDoc = async (refDB, stock) => {
        await updateDoc(refDB, {stock: stock})
    }

    if(loading){
        return(
            <div className="compraDiv">
                <h1 id="ordenEnCurso">Generando orden...</h1>
                <div className="loading">
                    <CircularIndeterminate/>
                </div>
            </div>
        )
    }

    if(orderId){
        return(
            <div className="compraDiv">
                <h1 className="compraExitosaMsj">¡Compra exitosa!</h1>
                <h2 className="compraExitosaMsj">Su numero de orden es: {orderId}</h2>
                <Link to="/">
                    <Button variant="contained">Volver a inicio</Button>
                </Link>
            </div>
            
        )
    }

    return(
        <div className="checkForm">
            <h2 id="datosPersonales">Datos personales</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
        
    )

}

export default Checkout