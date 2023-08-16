import "./style.css"
import {data} from "../../mocks/data"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    let [productos, setProductos] = useState([])
    let datos, categoryId = useParams()

    const getDatos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    }

    async function fetchingData(){
        datos = await getDatos()
        setProductos(datos)
    }

    useEffect(() => {
        fetchingData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="divItemListContainer">
            <ItemList productos={productos} categoryId={categoryId} />
        </div>
    );
    
}

export default ItemListContainer