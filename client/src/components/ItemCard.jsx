import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import StarRating from './StarRating.jsx'


export default function ItemCard({item}) {

// logic to render first image:     
// Parse the image URLs from a string to an array
  const imageUrls = JSON.parse(item.image);

// Use the first image URL if available
  const imageUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : "";
  console.log(item.average_rating)
   
  return (

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={item.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    <h3>{item.name}</h3>
                    <h4>Price: ${item.price}</h4>
                    <StarRating value={item.average_rating}/>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

   
  );
}
