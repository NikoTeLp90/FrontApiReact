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

const logout = async () => {
  try {
    const response = await fetch('https://pruebaapi-yt30.onrender.com/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      // Borra el token del localStorage
      localStorage.removeItem('access_token');
      // Redirige al login o home
      window.location.href = '/';
    } else {
      console.error("Error al cerrar sesión");
    }
  } catch (error) {
    console.error("Error de red:", error);
};
};