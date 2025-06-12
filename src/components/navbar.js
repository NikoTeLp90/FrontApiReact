import React from "react";
import { Link } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const Navbar = () => {
  const rol = getUserRole();

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/productos">Productos</Link>
      {rol === "admin" && <Link to="/admin">Admin Panel</Link>}
    </nav>
  );
};

export default Navbar;