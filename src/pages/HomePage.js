import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
import Navbar from "../components/navbar"
function Home() {
 
  return (
    <div className="Home">
      <Navbar />
        <h1>Bienvenido al home</h1>
    </div>
  );
}

export default Home;
