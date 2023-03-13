import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Main from "./pages/Main";
import Allprojects from "./pages/Allprojects";
import "./styles/App.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onMenuClick = (x) => {
    setIsNavOpen(x);
  }

  return (
    <>
      <Navbar isNavOpen={isNavOpen} onMenuClick={onMenuClick}/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/projects" element={<Allprojects/>}/>
      </Routes>
      <footer>Created with ♡ by Trisha Sia, © 2023</footer>
    </>
    
    
  );
}

export default App;
