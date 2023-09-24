import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = async (item) => {
    const response = await fetch("/api/carts/add_item", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: item.id, quantity: 1 }),
    });
  
    if (response.ok) {
      const updatedCart = await response.json();
      setCartItems(updatedCart.cartItems);
    } else {
      console.error('Response status:', response.status);
      const data = await response.text();  // Use .text() in case the response isn't JSON formatted
      console.error('Response data:', data);
    }
  };
  

  const removeFromCart = async (itemId) => {
    const response = await fetch(`/api/carts/remove_item`, { // Adjust endpoint as needed
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