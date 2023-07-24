import "./style.css"
import { useState } from "react";

const ItemCount = ({stock, inicial, title}) => {
    let [contador, setContador] = useState(inicial)
    let desabilitaIncremento = false
    let desabilitaDecremento = false
    let habilitaCarrito = (stock == 0 || contador == 0) ? true : false

    const incrementaContador = () => {
        if(contador < stock)
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
        console.log(`Pizza seleccionada: ${title}\nCantidad: ${contador}`)
    }

    return (
        <div className="contentCount">
            <div className="contentLog">
                <div className="title">
                    <h3>{title}</h3>
                    <p><strong>Stock: ({stock})</strong></p>
                </div>
                <div className="contentBtn">
                    <button onClick={decrementaContador} disabled={desabilitaDecremento}>-</button>
                    <p><strong>{contador}</strong></p>
                    <button onClick={incrementaContador} disabled={desabilitaIncremento}>+</button>
                </div>
            </div>
            <button className="btnCarrito" disabled={habilitaCarrito} onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount