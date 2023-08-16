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
                <Link to="/">
                    <button>Productos</button>
                </Link>
                <Link to="/category/pizza">
                    <button>Pizzas</button>
                </Link>
                <Link to="/category/sandwich">
                    <button>Sandwich</button>
                </Link>
                <Link to="/category/empanada">
                    <button>Empanadas</button>
                </Link>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar