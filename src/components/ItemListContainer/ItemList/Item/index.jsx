/* eslint-disable react/prop-types */
import "./style.css"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Item = ({producto}) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia 
                    component="img"
                    alt={producto.title}
                    height="140"
                    image={producto.pictureUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h3>{producto.title}</h3>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/item/${producto.id}`}>
                        <Button variant="contained" id="btnDetalle">Ver Detalles</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default Item