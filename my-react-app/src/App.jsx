import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Home from "./assets/Components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
