import { useState } from "react";

import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Herosection from "./assets/Components/Herosection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
    </>
  );
}

export default App;
