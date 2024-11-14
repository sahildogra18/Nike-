import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Herosection from "./assets/Components/Herosection";
import Menu from "./pages/Menu";
import Location from "./pages/Location";

function App() {
<<<<<<< HEAD
=======
  

>>>>>>> ca17fda026c7c0a627bce23e4f5cf7feea0f5ed1
  return (
    <>
      <Navbar />
      <Herosection />
      <Routes>
        <Route path="/Menu" element={<Herosection />} />
        <Route path="/Menu" element={<Navbar />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
