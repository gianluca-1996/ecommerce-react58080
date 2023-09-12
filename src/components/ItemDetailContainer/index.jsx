/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig"
import CircularIndeterminate from "../Loading"



const ItemDetailContainer = () => {
    
    const {id} = useParams()    //PARAMETRO PARA IDENTIFICAR EL PRODUCTO SELECCIONADO
    const [producto, setProducto] = useState({})
    
    const [loading, setLoading] = useState(true)

    //METODO PARA OBTENER EL DOCUMENTO DE LA BD
    const fetchData = async () => {

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        
        setProducto({...docSnap.data(), id: docSnap.id})
        setLoading(false)
    }
    
    useEffect(() => {
        fetchData(id)
    }, [])

    return(
        <>
        {loading ? (
            <div className="loading">
                <CircularIndeterminate/>
            </div>
        ) : (
            <div className="divItemDetailContainer">
                <ItemDetail producto={producto}/>
            </div>
        )}
        </>
    )
}

export default ItemDetailContainer