import "./style.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1 id="tituloNav">Temperlina</h1>
            </div>
            <div className="menuNav">
                <Link to="/">Productos</Link>
                <Link to="/category">Categorias</Link>
                <Link to="/item">Item</Link>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar