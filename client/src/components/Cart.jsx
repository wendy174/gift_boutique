import React from 'react';
import { useCart } from './CartContext';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Cart displays items in the cart
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Your Cart is Empty
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <>
            <ListItem key={index}>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price} Quantity: ${item.quantity}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
      <Typography variant="h6" align="center" gutterBottom>
        Total Quantity: {totalQuantity}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Total Amount: ${totalAmount.toFixed(2)}
      </Typography>
    </Container>
  );
};

export default Cart;
