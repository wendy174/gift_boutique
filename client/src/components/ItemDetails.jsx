import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Container } from "@mui/material";
import StarRating from './StarRating.jsx'
import ImageCarousel from './ImageCarousel'
import ImageCarousel2 from './ImageCarousel2'


export default function ItemDetails() {
    const [itemData, setItemData] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(`/api/items/${id}`);
          const data = await resp.json();
          setItemData(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, [id]);
  
    if (!itemData) {
      return <div>Loading...</div>;
    }
  
    // Parse the image URLs from a string to an array
    const imageUrls = JSON.parse(itemData.image);
  
    // Use the first image URL if available
    const imageUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : "";
  
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ImageCarousel images={imageUrls} />

                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ marginBottom: "16px" }}>{itemData.name}</Typography>
                    <Typography variant="h5" color="textSecondary">
                    ${itemData.price}
                    <br></br>
                    <StarRating value={itemData.average_rating}/>
                    </Typography>
                </Box>
                </CardContent>
        </Container>


    );
  }
  