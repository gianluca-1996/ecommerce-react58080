/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const ItemDetail = ({producto}) => {
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={producto.pictureUrl}
          title="Napolitana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al Carrito</Button>
        </CardActions>
      </Card>
    );
}

export default ItemDetail