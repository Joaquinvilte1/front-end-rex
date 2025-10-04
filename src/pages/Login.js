// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ahora sí importamos el CSS

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario, "Contraseña:", contrasena);
    
    // Aquí puedes descomentar tu API cuando esté lista
    /*
    const response = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: usuario, password: contrasena }),
    });

    if (response.ok) {
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
    */
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>INICIAR SESIÓN</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}