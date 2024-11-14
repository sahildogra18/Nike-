import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Herosection from "./assets/Components/Herosection";
import Menu from "./pages/Menu";
import Location from "./pages/Location";

function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
