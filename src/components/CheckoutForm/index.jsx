/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import "./style.css"


const CheckoutForm = ({onConfirm}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        onConfirm(data)
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField 
                    className="textField"
                    label="Name"
                    variant="standard" 
                    {...register('name',
                    {
                        required: true
                    })}/> {errors.name?.type === 'required' && <p className="error">El nombre es obligatorio</p>}
                </div>
                <div>
                    <TextField 
                    className="textField"
                    type="number" 
                    label="Phone" 
                    variant="standard"
                    {...register('phone',
                    {
                        required:true,
                        min:0
                    })}/>{errors.phone?.type === 'required' && <p className="error">El teléfono es obligatorio</p>}
                        {errors.phone?.type === 'min' && <p className="error">El teléfono no puede ser negativo</p>}
                </div>
                <div>
                    <TextField 
                    className="textField"
                    label="Email" 
                    variant="standard" 
                    {...register('email',
                    {
                        required: true,
                        pattern:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
                    })}/>{errors.email?.type === 'required' && <p className="error">El email es obligatorio</p>}
                        {errors.email?.type === 'pattern' && <p className="error">El formato del email es incorrecto</p>}
                </div>
                <div id="btnsubmit">
                    <Button type="submit" variant="contained">Enviar</Button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm