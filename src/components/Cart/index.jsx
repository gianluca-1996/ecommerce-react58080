/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import "./style.css"


import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {

    const {cart, clearCart, total, removeItem, cantidadCarrito} = useContext(CartContext)
    const rows = cart

    if(cantidadCarrito === 0){
        
        return(
            
            <div className="infoCarritoVacio">
                <h1>No hay productos en el carrito</h1>
                <Link to="/">
                    <Button variant="contained">Volver</Button>
                </Link>
            </div>
        )
    }
    else{
    return(
        <div className="infoCarrito">
            <div>
                <TableContainer component={Paper} className="tabla">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <h3>PRODUCTO</h3>
                                </TableCell>
                                <TableCell align="left">
                                    <h3>PRECIO</h3>
                                </TableCell>
                                <TableCell align="left">
                                    <h3>CANTIDAD</h3>
                                </TableCell>
                                <TableCell align="left">
                                    <h3>SUBTOTAL</h3>
                                </TableCell>
                            </TableRow>
                            </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="left">${row.price}</TableCell>
                                <TableCell align="left">{row.cant}</TableCell>
                                <TableCell align="left">${row.subtotal}</TableCell>
                                <TableCell align="right">
                                <Button variant="contained" color="error" onClick={ () => {removeItem(row)} }>
                                    Eliminar
                                </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>                
            </div>
            <h2 className="total">Total: ${total}</h2>
            <div className="vaciar">
                <Button variant="contained" color="warning" className="vaciar" onClick={clearCart}>Vaciar Carrito</Button>
            </div>
            <div className="btnCheckout">
                <Link to="/checkout">
                    <Button variant="contained">Checkout</Button>
                </Link>
            </div>
        </div>
    )
    }
}

export default Cart