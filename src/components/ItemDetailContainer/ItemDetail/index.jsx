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


const ItemDetail = ({producto}) => {
  let [contador, setContador] = useState(0)
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
          subtotal: producto.price * contador
      }

      addItem(item, contador)
  }


    return(
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={`../${producto.pictureUrl}`}
            title={producto.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>${producto.price}</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Stock: {producto.stock}</strong>
            </Typography>
            <div className='contadorClass'>
              <Button onClick={decrementaContador} disabled={desabilitaDecremento}>-</Button>
              <p className='contador'><strong>{contador}</strong></p>
              <Button onClick={incrementaContador} disabled={desabilitaIncremento}>+</Button>
            </div>
            <div>
                <button className="btnCarrito" disabled={desHabilitaCarrito} onClick={onAdd}>Agregar al carrito</button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default ItemDetail