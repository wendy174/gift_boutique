import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Header from "./Header.jsx"
import ItemCard from "./ItemCard.jsx"
import ItemList from "./ItemList.jsx"
import ItemPage from "./ItemPage.jsx"
import './App.css';
import CustomCard from "./CustomCard";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import ItemDetails from "./ItemDetails";
import ImageCarousel from './ImageCarousel'
import ImageCarousel2 from './ImageCarousel2'
import ItemForm from './ItemForm'
import AlertBar from './AlertBar.jsx'


function App() {
  const [items, setItems] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Updates local state when with delete item request
  const updateStateWhenDelete = (itemData) => { 
      const newItems = items.filter(item => item.id !== itemData.id);
      setItems(newItems)
    }
  
  // Get request for all items 
  useEffect(() => { 
    const fetchData = async() => { 
      try { 
        const resp = await fetch("/api/items")
        const itemsData = await resp.json()
        setItems(itemsData)
      } catch (error) { 
        console.error('Error:', error)
      }
    }
    fetchData(); 
  }, []); 

  // alertbar 
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };



  return (
    <div className="App">
      <Header className='header' />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemPage items={items} />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetails setOpenSnackbar={setOpenSnackbar} updateStateWhenDelete={updateStateWhenDelete} />} />
        <Route path="/imagecarousel" element={<ImageCarousel images={items.image}/>} />
        {/* <Route path="/imagecarousel2" element={<ImageCarousel2 images={items.image}/>} /> */}
        <Route path="/itemform" element={<ItemForm />} />
      </Routes>
      <AlertBar open={openSnackbar} handleClose={() => setOpenSnackbar(false)} message="Item Deleted" severity="info" /> 
    </div>
  );
}

export default App
