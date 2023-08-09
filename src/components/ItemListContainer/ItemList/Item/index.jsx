/* eslint-disable react/prop-types */
import "./style.css"
import { useState } from "react";

const Item = ({producto}) => {
    let [contador, setContador] = useState(0)
    let desabilitaIncremento = false
    let desabilitaDecremento = false
    let desHabilitaCarrito = (producto.stock == 0 || contador == 0) ? true : false

    const incrementaContador = () => {
        if(contador < producto.stock)
            setContador(contador += 1)
        else
            desabilitaIncremento = true
    }

    const decrementaContador = () => {
        if(contador > 0)
            setContador(contador -= 1)
        else
            desabilitaDecremento = true
    }

    const onAdd = () => {
        console.log(`Pizza seleccionada: ${producto.title}\nCantidad: ${contador}`)
    }

    return (
        <Content title={producto.title} contador={contador} stock={producto.stock}
        decrementaContador={decrementaContador} desabilitaDecremento={desabilitaDecremento}
        incrementaContador={incrementaContador} desabilitaIncremento={desabilitaIncremento}
        desHabilitaCarrito={desHabilitaCarrito} description={producto.description} price={producto.price} onAdd={onAdd}/>
    )
}

const Content = (props) => {
    return(
        <div className="contentCount">
            <div className="contentLog">
                <div className="title">
                    <h3>{props.title}</h3>
                    <p>({props.description})</p>
                    <p>${props.price}</p>
                    <p><strong>Stock: ({props.stock})</strong></p>
                </div>
                <div className="contentBtn">
                    <button onClick={props.decrementaContador} disabled={props.desabilitaDecremento}>-</button>
                    <p><strong>{props.contador}</strong></p>
                    <button onClick={props.incrementaContador} disabled={props.desabilitaIncremento}>+</button>
                </div>
            </div>
            <button className="btnCarrito" disabled={props.desHabilitaCarrito} onClick={props.onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Item