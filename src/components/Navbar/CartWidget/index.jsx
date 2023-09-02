import { Link } from "react-router-dom";
import Carrito from "../../../assets/icons/carrito.png";
import "./style.css"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <Link to="/cart" className="cartDiv" style={{display: cantidadCarrito != 0 ? "block" : "none"}}>
            <img src={Carrito} alt="carrito" height={50} width={50} />
            <strong style={{color: "red"}}>{cantidadCarrito}</strong>
        </Link>
    );
}

export default CartWidget;