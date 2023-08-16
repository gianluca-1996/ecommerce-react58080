/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Item from "./Item"
import './style.css'

const ItemList = ({productos, categoryId}) => {
    let datos = []

    if(categoryId.categoryId){
        datos = productos.filter((prod) => prod.category == categoryId.categoryId)
    }
    else{
        datos = productos
    }

    return(
        datos.map((prod) => <div className="item"><Item key={prod.id} producto={prod}/></div>)
    )
}

export default ItemList