import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

export default function StarRating({ value }) {
  return (
    <Box display="flex" justifyContent="center">
      <Rating name="half-rating" value={value} precision={0.5} readOnly />
    </Box>
  );
}