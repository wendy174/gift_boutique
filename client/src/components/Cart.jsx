import React from 'react';
import { useCart } from './CartContext';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems ? cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;
  const totalQuantity = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

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
          <React.Fragment key={index}>
            <ListItem>
              {/* Display the first image from the item's images array */}
              <ListItemAvatar>
                <Avatar variant="square" src={item.image && item.image[0]} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
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
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h6" align="center" gutterBottom>
        Total Price: ${totalAmount.toFixed(2)}
      </Typography>
    </Container>
  );
};

export default Cart;

