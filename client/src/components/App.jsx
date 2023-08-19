import { useState, useEffect } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
    </div>
  );
}

export default App
