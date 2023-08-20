import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Header from "./Header.jsx"
import ItemCard from "./ItemCard.jsx"
import ItemList from "./ItemList.jsx"
import ItemPage from "./ItemPage.jsx"
import './App.css';



function App() {
  const [items, setItems] = useState([]);

  console.log(items)

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
      {/* <ItemPage /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/itemcard" element={<ItemCard />} /> */}
        <Route path="/itemlist" element={<ItemList items={items}/>} />

      </Routes>
    </div>
  );
}

export default App
