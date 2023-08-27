import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Container } from "@mui/material";
import StarRating from './StarRating.jsx'
import ImageCarousel from './ImageCarousel'
import DeleteItemButton from './DeleteItemButton.jsx'
import AlertBar from './AlertBar.jsx'
import { Alert } from 'bootstrap';



export default function ItemDetails({setOpenSnackbar, updateStateWhenDelete}) {
    const [itemData, setItemData] = useState(null);
    const { id } = useParams();
    // const [deleteMessage, setDeleteMessage] = useState(false)
    const navigate = useNavigate();

// Fetch Request for individual items 
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
  
  // Loading message 
    if (!itemData) {
      return <div>Loading...</div>;
    }

  // Delete requests 
  const handleDeleteItem = async () => {
    try {
        const response = await fetch(`/api/items/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Item deleted successfully');
            // You can also navigate the user back to a listing page or inform them of successful deletio
            console.log(itemData)
            updateStateWhenDelete(itemData); 
            setOpenSnackbar(true);
            navigate('/');
 
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
  