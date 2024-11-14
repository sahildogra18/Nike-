import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Home from "./assets/Components/Home";

function App() {
<<<<<<< HEAD
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
=======

  return (
    <>
      <Routes>

        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Herosection />} />


>>>>>>> 9f6a71a8616be074d41480a4020022005305626b
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
