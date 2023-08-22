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

function App() {
  const [items, setItems] = useState([]);


  // get request to get all items 
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



  return (
    <div className="App">
      <Header className='header' />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemPage items={items} />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/imagecarousel" element={<ImageCarousel images={items.image}/>} />
        <Route path="/imagecarousel2" element={<ImageCarousel2 images={items.image}/>} />
      </Routes>
    </div>
  );
}

export default App
