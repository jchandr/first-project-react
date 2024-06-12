import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate("/home");
  };
  return (
    <>
      <button onClick={() => handleHomeButtonClick()}>Home</button>
    </>
  );
}

export default App;
