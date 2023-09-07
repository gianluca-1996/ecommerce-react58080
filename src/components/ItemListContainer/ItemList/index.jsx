/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Item from "./Item"
import './style.css'

const ItemList = ({productos}) => {
    
    return(
        productos.map((prod) => <div className="item" key={prod.id}>
                <Item key={prod.id} producto={prod}/>
            </div>)
    )
}

export default ItemList