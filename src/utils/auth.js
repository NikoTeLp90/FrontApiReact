import {jwtDecode} from "jwt-decode";

export const getUserRole = () => {
  const token = localStorage.getItem("token"); // o sessionStorage
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.rol || null; // suponiendo que el token tiene { ... rol: 'admin' }
  } catch (error) {
    console.error("Token inválido", error);
    return null;
  }
};