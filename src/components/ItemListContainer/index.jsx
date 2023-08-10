import "./style.css"
import {data} from "../../mocks/data"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    
    let [productos, setProductos] = useState([])
    let datos

    const getDatos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
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
        <div className="principal">
            <ItemList productos={productos}/>
        </div>
    );
    
}

export default ItemListContainer