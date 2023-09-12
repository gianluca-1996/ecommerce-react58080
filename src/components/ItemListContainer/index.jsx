import "./style.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig"
import CircularIndeterminate from "../Loading"

const ItemListContainer = () => {
    
    const categoryId = useParams()  //PARAMETRO PARA FILTRAR POR CATEGORIAS
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //METODO PARA HACER LAS CONSULTAS A LA BASE DE DATOS
    const fetchData = async () => {
        let data = []
        let q

        //SI LA CATEGORIA TIENE UN VALOR ENTONCES ARMA EL QUERY FILTRANDO POR CATEGORIA
        if(categoryId.categoryId){
            q = query(collection(db, "productos"), where("category", "==", categoryId.categoryId));
        }
        else{
            q = query(collection(db, "productos"));
        }

        const querySnapshot = await getDocs(q); //OBTIENE LOS DOCUMENTOS DE LA BD
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id: doc.id})  //INSERTA LOS DATOS DEL DOCUMENTO MAS SU ID
        });
        
        setProductos(data)
        setLoading(false)
    }

    //AL CAMBIAR EL ESTADO DE LA CATEGORIA SE RENDERIZA LA VISTA DE PRODUCTOS
    useEffect( () => {
        fetchData()
    }, [categoryId])


    return(
        <>
        {loading ? (
            <div className="loading">
                <CircularIndeterminate/>
            </div>
        ) : (
            <div className="divItemListContainer">
                <ItemList productos={productos}/>
            </div> 
        )}
        </>
    );
    
}

export default ItemListContainer