/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useState } from "react";
import './style.css'
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {
  let [contador, setContador] = useState(0)
  let [cantidadAgregada, setCantidadAgregada] = useState(0)
  const {addItem} = useContext(CartContext)
  let desabilitaIncremento = false
  let desabilitaDecremento = false
  let desHabilitaCarrito = (producto.stock == 0 || contador == 0) ? true : false

  const incrementaContador = () => {
      if(contador < producto.stock)
          setContador(contador += 1)
      else
          desabilitaIncremento = true
  }

  const decrementaContador = () => {
      if(contador > 0)
          setContador(contador -= 1)
      else
          desabilitaDecremento = true
  }

  const onAdd = () => {
      const item = {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          cant: contador,
          subtotal: producto.price * contador
      }

      setCantidadAgregada(contador)
      addItem(item, contador)
  }


    return(
      <div className='card'>
        <Card elevation={24}>
          <CardMedia
            sx={{ height: 200 }}
            image={`../${producto.pictureUrl}`}
            title={producto.title}
          />
          <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div" className='infoItem'>
              {producto.title}
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" color="text.secondary" className='infoItem'>
                  <strong>{producto.description}</strong>
                </Typography>
              </li>
              <li>
              <Typography variant="body2" color="text.secondary" className='infoItem'>
                <strong>${producto.price}</strong>
              </Typography>    
              </li>
              <li>
              <Typography variant="body2" color="text.secondary" className='infoItem'>
                <strong>Stock: {producto.stock}</strong>
              </Typography>
              </li>
            </ul>
            <div className='contadorClass'>
                <Button variant="contained" onClick={decrementaContador} disabled={desabilitaDecremento}>-</Button>
                <p className='contador'><strong>{contador}</strong></p>              
                <Button variant="contained" onClick={incrementaContador} disabled={desabilitaIncremento}>+</Button>
            </div>
            <div className='bntAgregaFinaliza'>
              {
                cantidadAgregada == 0 ? (
                  <Button variant="contained" disabled={desHabilitaCarrito} onClick={onAdd}>
                    Agregar al carrito
                </Button>
                ) : (
                  <Link to="/cart">
                  <Button variant="contained">
                    Finalizar Compra
                  </Button>
                </Link>
                )
              }
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default ItemDetail