import React, { createContext, useContext, useState } from 'react';
import { useUser } from './UserContext';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser, updateCurrentUser } = useUser();



  const addToCart = async (item) => {
    const token = currentUser ? await currentUser.getIdToken() : null;
    const response = await fetch("/api/carts/add_item", {
      method: 'POST',
      headers: 
        { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
      body: JSON.stringify({ item_id: item.id, quantity: 1 }),
    });
  
    if (response.ok) {
      const updatedCart = await response.json();
      console.log('Updated cart:', updatedCart); // Add this line
      const itemsFromCart = updatedCart.cart_items.map(cartItem => ({
        ...cartItem.item,
        quantity: cartItem.quantity,
        price: cartItem.price
      }));
      setCartItems(itemsFromCart);
    } else {
      console.error('Response status:', response.status);
      const data = await response.json();
      console.error('Response data:', data);

    }
  };

 

  const removeFromCart = async (itemId) => {
    // const response = await fetch(`/api/carts/remove_item`, { // Adjust endpoint as needed
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ item_id: itemId }),
    // });
  
    // if (response.ok) {
    //   const updatedCart = await response.json();
    //   setCartItems(updatedCart.cartItems || []);
    // }
    console.log('disabled')
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


 // const addToCart = async (item) => {
  //   const response = await fetch("/api/carts/add_item", { // Adjust endpoint as needed
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ item_id: item.id, quantity: 1 }), // Replace 1 with desired quantity
  //   });
  
  //   if (response.ok) {
  //     const updatedCart = await response.json();
  //     setCartItems(updatedCart.cartItems); // Assuming `updatedCart.cartItems` holds the new cart state
  //   }
  // };
  