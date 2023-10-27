import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Container } from "@mui/material";
import StarRating from './StarRating.jsx'
import ImageCarousel from './ImageCarousel'
import DeleteItemButton from './DeleteItemButton.jsx'
import Review from './Review.jsx'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from './CartContext';


export default function ItemDetails({setOpenSnackbar, updateStateWhenDelete}) {
    const [itemData, setItemData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart(); 

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
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Item deleted successfully');
            // You can also navigate the user back to a listing page or inform them of successful deletio
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
    const imageUrls = itemData.image;
  
    return (

        <div>
          
          <Container sx={{ marginTop: '3rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', height: '70vh', justifyContent: 'space-between' }}>

                {/* Image Carousel */}
                <Box sx={{ flexBasis: '50%', maxWidth: '50%', height: '100%' }}>
                <ImageCarousel images={imageUrls} />
                    </Box>
            
                {/* Item Details */}
                <Box sx={{ flexBasis: '50%', maxWidth: '50%', display: 'flex', justifyContent: 'center', transform: 'translateY(100px)' }}>


                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <Typography variant="h4" sx={{ marginBottom: "16px" }}>
                            {itemData.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" sx={{ marginBottom: "16px" }}>
                            ${itemData.price}
                        </Typography>
                        <Box sx={{ marginBottom: "1rem" }}>
                            <StarRating value={itemData.average_rating} />
                        </Box>
                        <Box sx={{ marginBottom: "1rem" }}>
                            <DeleteItemButton onClick={handleDeleteItem} />
                        </Box>
                        <Button 
                            variant="contained" 
                            size="large" 
                            startIcon={<AddShoppingCartIcon />} 
                            onClick={() => addToCart(itemData)}
                            sx={{ backgroundColor: '#b96eaa' }}
                        >
                            Add to Cart
                        </Button>
                    </CardContent>
                </Box>
            </Container>
    
            {/* Reviews */}
            <Box sx={{ marginTop: '10rem', marginBottom: '5rem' }}>
                <Review reviews={itemData.reviews || []} />
            </Box>
        </div>
    );
  }
  
