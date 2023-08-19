import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Header from "./Header.jsx"
import ItemCard from "./ItemCard.jsx"
import './App.css';



function App() {
  const [items, setItems] = useState([]);

  console.log(items)

  // get request to get all items 
  useEffect(() => { 
    const fetchData = async() => { 
      try { 
        const resp = await fetch("http://localhost:3000/items")
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
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/itemcard" element={<ItemCard />} /> */}
      </Routes>
    </div>
  );
}

export default App
