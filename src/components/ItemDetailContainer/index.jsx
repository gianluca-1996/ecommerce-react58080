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
    
    const {id} = useParams()
    const [producto, setProducto] = useState({})
    
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            setProducto({...docSnap.data(), id: docSnap.id})
            setLoading(false)
        } else {
            alert("Producto no encontrado en la base de datos")
        }
    }
    
    useEffect(() => {
        fetchData(id)
    }, [])

    if(loading){
        return(
            <div className="loading">
                <CircularIndeterminate/>
            </div>
        );
    }

    return(
        <div className="divItemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer