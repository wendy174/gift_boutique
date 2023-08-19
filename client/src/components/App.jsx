import { useState, useEffect } from "react";
import { Router, Route} from 'react-router-dom'
import NavBar from "./NavBar.jsx"
import Header from "./Header.jsx"
import './App.css';



function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Header className='header' />
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes> */}
    </div>
  );
}

export default App
