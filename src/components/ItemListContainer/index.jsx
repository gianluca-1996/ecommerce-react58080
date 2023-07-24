import "./style.css"
import Button from "./Button"
import { useState } from "react";
import ItemCount from "./ItemCount";

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
            <ItemCount stock={4} inicial={0} title={"Napolitana"}/>
            <ItemCount stock={3} inicial={0} title={"Jamon y Morrones"}/>
            <ItemCount stock={0} inicial={0} title={"Muzza Temperlina"}/>
        </div>
    );
    
}

export default ItemListContainer