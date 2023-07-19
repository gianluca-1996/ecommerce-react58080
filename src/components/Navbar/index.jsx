import "./style.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1 id="tituloNav">Temperlina</h1>
            </div>
            <div className="menuNav">
                <button>Productos</button>
                <button>Envíos</button>
                <button>Medios de pago</button>
                <button>Nosotros</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar