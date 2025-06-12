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
      const response = await fetch("http://127.0.0.1:5000/login", {
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

        <h2>User credentials</h2>
        <h3>email: NikoteDev@dev.com</h3>
        <h3>password: 123456</h3>
      </form>
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
}

export default Login;
