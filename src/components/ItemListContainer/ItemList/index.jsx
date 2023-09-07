/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Item from "./Item"
import './style.css'

const ItemList = ({productos, categoryId}) => {

    //TODO: MOSTRAR LOS PRODUCTOS YA FILTRADOS DESDE ITEMLISTCONTAINER


    //TODO: ELIMINAR ESTE FILTRO
    if(categoryId.categoryId){
        return(
            productos.filter((prod) => prod.category == categoryId.categoryId)
                    .map((prod) => <div className="item" key={prod.id}>
                    <Item key={prod.id} producto={prod}/>
                </div>)
        )    
    }

    return(
        productos.map((prod) => <div className="item" key={prod.id}>
                <Item key={prod.id} producto={prod}/>
            </div>)
    )
}

export default ItemList