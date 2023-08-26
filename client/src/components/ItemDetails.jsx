import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Container } from "@mui/material";
import StarRating from './StarRating.jsx'
import ImageCarousel from './ImageCarousel'
import DeleteItemButton from './DeleteItemButton.jsx'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



export default function ItemDetails() {
    const [itemData, setItemData] = useState(null);
    const { id } = useParams();


    const navigate = useNavigate();
  
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

  const handleDeleteItem = async () => {
    try {
        const response = await fetch(`/api/items/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Item deleted successfully');
            // You can also navigate the user back to a listing page or inform them of successful deletion
            navigate('/')
        } else {
            const data = await response.json();
            console.error('Error deleting item:', data.error);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
  };
  
 

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
                    <br>
                    </br>
                    <StarRating value={itemData.average_rating}/>
                    <br> 
                    </br>
                    <DeleteItemButton onClick={handleDeleteItem}/>
                    </Typography>
                </Box>
                </CardContent>
        </Container>


    );
  }
  