import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import StarRating from './StarRating.jsx'
import { Link } from 'react-router-dom';

export default function ItemCard({item}) {

  return (
    <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 545, minHeight: 400, m: 2, borderRadius: '16px'}}> 
        <CardActionArea>
          <CardMedia
            component="img"
            height="300" 
            width="400" 
            image={item.image[0]}
            alt={item.name}
            sx={{ objectFit: "cover" }} 
          />
          <CardContent  sx={{ height: '250px'}}>
            <Typography gutterBottom variant="h5" component="div"> 
              <h3 style={{ fontSize: '25px' }}>{item.name}</h3>
              <h4 style={{ fontSize: '25px' }}>Price: ${item.price}</h4>
              <StarRating value={item.average_rating}/>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
   
  );
}
