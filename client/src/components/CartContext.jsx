import React, { createContext, useContext, useState } from 'react';

// makes state and all these functions accessable 


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems)

  const addToCart = async (item) => {
    const response = await fetch(`/carts/add_item`, { // Adjust endpoint as needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: item.id, quantity: 1 }), // Replace 1 with desired quantity
    });
  
    if (response.ok) {
      const updatedCart = await response.json();
      setCartItems(updatedCart.cartItems); // Assuming `updatedCart.cartItems` holds the new cart state
    }
  };
  

  const removeFromCart = async (itemId) => {
    const response = await fetch(`/carts/remove_item`, { // Adjust endpoint as needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemId }),
    });
  
    if (response.ok) {
      const updatedCart = await response.json();
      setCartItems(updatedCart.cartItems);
    }
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};