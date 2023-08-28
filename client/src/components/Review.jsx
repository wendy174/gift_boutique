// Renders reviews for ItemDetails page 

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRating from './StarRating'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Review({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review, index) => (
        <Card key={index} sx={{ minWidth: 275, borderRadius: '16px', marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {review.customer.first_name} says: {review.comment}
            </Typography>
            <br>
            </br>
            <StarRating value={review.rating}/>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}