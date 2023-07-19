import "./style.css"
import Button from "./Button"
import { useState } from "react";

const ItemListContainer = ({greetings}) => {
    let [saludo, setSaludo] = useState(greetings)

    const cambiaSaludo = () => {
        if(saludo == "Adios!"){
            setSaludo("Hola mundo React!")
        }
        else{
            setSaludo("Adios!")
        }
    }

    return(
        <div className="principal">
            <h1 id="saludoeReact">{saludo}</h1>
            <Button modifica={cambiaSaludo} />
        </div>
    );
}

export default ItemListContainer