import React from "react";
import { Link } from "react-router-dom";
import { getUserRole, logout } from "../utils/auth";


const Navbar = () => {
  const rol = getUserRole();

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/productos">Productos</Link>
      <button onClick={logout}>Salir</button>
      {rol === "admin" && <Link to="/admin">Admin Panel</Link>}
    </nav>
  );
};

export default Navbar;