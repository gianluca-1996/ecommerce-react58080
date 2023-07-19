//import { useState } from "react";
import "./style.css"

const Button = ({modifica}) => {
    //let [contador, setContador] = useState(0)

    return (
        /*<button className="countButton" onClick={() => setContador(contador += 1)}>
            Count {contador}
        </button>
        */
       <button className="countButton" onClick={modifica}>Cambiar saludo</button>
    );
}

export default Button