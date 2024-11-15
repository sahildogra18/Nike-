import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Home from "./assets/Components/Home";
import Navbar from "./assets/Components/Navbar";
import AuthForm from "./pages/Contactus";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;
