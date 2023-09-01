/* eslint-disable react/prop-types */
import "./style.css"
import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <div className="contentCount">
            <div className="contentLog">
                <div className="title">
                    <h3>{producto.title}</h3>
                    <p><strong>Stock: ({producto.stock})</strong></p>
                </div>
                <div>
                    <Link to={`/item/${producto.id}`}>
                        <button>Ver Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item