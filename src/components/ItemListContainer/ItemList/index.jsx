/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Item from "./Item"
import './style.css'

const ItemList = ({productos, categoryId}) => {
console.log(categoryId.categoryId)
    let datos = []

    if(categoryId.categoryId){
        datos = productos.filter((prod) => prod.category == categoryId.categoryId)
    }
    else{
        datos = productos
        console.log('else')
    }

    return(
        datos.map((prod) => <div className="item"><Item key={prod.id} producto={prod}/></div>)
    )
}

export default ItemList