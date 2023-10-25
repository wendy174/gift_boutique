import * as React from 'react';
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ItemForm({addNewItem}) {

  const [newItem, setNewItem] = useState({
    name: '', 
    price: '', // price and quantity will be converted to numbers later on 
    image: [], 
    quantity: '', 
    category: '', 
    seller_id: 1
  })


  // dynamically capture input fields 
  const updateField = (e) => {
    let value = e.target.value;
    const fieldName = e.target.name;
  
    // Convert to float if the input name is 'price'
    if (fieldName === 'price' && value !== '') {
      value = parseFloat(value);  // Keeping two decimal places
    }
  
    // Convert to integer if the input name is 'quantity'
    if (fieldName === 'quantity' && value !== '') {
      value = parseInt(value, 10);
    }

    if (fieldName === 'image') {
      value = e.target.value.split(',').map(str => str.trim()); // Split by comma and trim
    }
  
    setNewItem({
      ...newItem,
      [fieldName]: value,
    });
  };

// Handles Post request 
  const handleSubmit = async (e) => { 
    e.preventDefault()

    try { 
      const resp = await fetch('/api/items', { 
        method: 'POST', 
        headers: { 
          "Content-Type": 'application/json', 
        }, 
        body: JSON.stringify(newItem)
      })

      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      const myItem = await resp.json()
      addNewItem(myItem)

    } catch(error) { 
      console.error('An error occurred while saving the plant:', error)
    }
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px', 
            border: '1px solid #aaa',
            borderRadius: '10px'
          }}
          style={{ backgroundColor: 'white', border: '1px solid #aaa' }}
        >
          
          <Typography component="h1" variant="h5">
            Submit a product to sell
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={newItem.name}
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  value={newItem.price}
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="quantity"
                  value={newItem.quantity}
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  id="category"
                  label="Category"
                  name="category"
                  autoComplete="category"
                  value={newItem.category}
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  id="image"
                  label="Images"
                  name="image"
                  autoComplete="image"
                  value={newItem.image} 
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}