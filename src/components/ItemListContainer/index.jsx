import "./style.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemListContainer = () => {
    
    let categoryId = useParams()
    const {productos} = useContext(CartContext)

    //TODO: REALIZAR LA LLAMADA A FIRESTORE SEGUN CATEGORYID


    return(
        <div className="divItemListContainer">
            <ItemList productos={productos} categoryId={categoryId} />
        </div>
    );
    
}

export default ItemListContainer