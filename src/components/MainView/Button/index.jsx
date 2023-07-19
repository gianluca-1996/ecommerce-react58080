import { useState } from "react";
import "./style.css"

const Button = () => {
    let [contador, setContador] = useState(0)

    return (
        <button className="countButton" onClick={() => setContador(contador += 1)}>
            Count {contador}
        </button>
    );
}

export default Button