import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../css/Login.css'

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const iniciarSesion = async e => {
    e.preventDefault();

    try {
      const response = await fetch("https://pruebaapi-yt30.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Error al iniciar sesión");

      const data = await response.json();
      localStorage.setItem("token", data.access_token);

      alert("¡Sesión iniciada!");
      navigate("/home");  // <-- Aquí hacés el redirect
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="Login">
      <form onSubmit={iniciarSesion}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={handleChange} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        <button type="submit">Enviar</button>

        <h2>User admin credentials</h2>
        <h4>email: NikoteDev@dev.com</h4>
        <h4>password: 123456</h4>

        <h2>User cliente credentials</h2>
        <h4>email: Carlos@compra.com</h4>
        <h4>password: 123456</h4>
      </form>
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
}

export default Login;
