import "./style.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig"
import CircularIndeterminate from "../Loading"

const ItemListContainer = () => {
    
    const categoryId = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //TODO: REALIZAR LA LLAMADA A FIRESTORE SEGUN CATEGORYID
    const fetchData = async () => {
        let data = []
        let q

        if(categoryId.categoryId){
            q = query(collection(db, "productos"), where("category", "==", categoryId.categoryId));
        }
        else{
            q = query(collection(db, "productos"));
        }

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id: doc.id})
        });
        
        setProductos(data)
        setLoading(false)
    }

    useEffect( () => {
        fetchData()
    }, [categoryId])

    if(loading){
        return(
            <div className="loading">
                <CircularIndeterminate/>
            </div>
        );
    }

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