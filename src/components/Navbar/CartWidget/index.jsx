import Carrito from "../../../assets/icons/carrito.png";
import "./style.css"

const CartWidget = () => {
    return (
        <div className="cartDiv">
            <img src={Carrito} alt="carrito" height={50} width={50} />
            <p>5</p>
        </div>
    );
}

export default CartWidget;