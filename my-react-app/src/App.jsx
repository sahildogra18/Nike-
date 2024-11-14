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

>>>>>>> 290fc221b97ad6c81f24a0d57e5593f11797bbef
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Herosection />} />
=======
>>>>>>> 290fc221b97ad6c81f24a0d57e5593f11797bbef
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
