import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import StarRating from './StarRating.jsx'
import { Link } from 'react-router-dom';



export default function ItemCard({item}) {

// logic to render first image:     
// Parse the image URLs from a string to an array
// const imageUrls = JSON.parse(item.image); // item.image should already be an array
// const imageUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : "";


  return (
    <Link to={`/items/${item.id}`}>
      <Card sx={{ maxWidth: 545, minHeight: 400, m: 2, borderRadius: '16px'}}> {/* Increased maxWidth and minHeight */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="300" 
            width="400" 
            image={item.image[0]}
            alt={item.name}
            sx={{ objectFit: "cover" }} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"> {/* Changed variant to h5 */}
              <h3>{item.name}</h3>
              <h4>Price: ${item.price}</h4>
              <StarRating value={item.average_rating}/>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
   
  );
}
