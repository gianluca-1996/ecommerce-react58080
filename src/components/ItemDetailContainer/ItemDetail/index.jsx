/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'


const ItemDetail = ({producto}) => {
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
          </CardContent>
        </Card>
      </div>
    );
}

export default ItemDetail