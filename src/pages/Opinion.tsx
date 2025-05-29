import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const BASE_URL = "/github-pages"; // Base para rutas de imágenes
const STORAGE_KEY = "comentariosGuardados";
const STORAGE_LOGIN_KEY = "loginAdminActivo";
const PASSWORD = "1037856043"; // contraseña fija (puedes cambiarla)

interface Comentario {
  nombre: string;
  comentario: string;
  avatar: string;
}

export default function ComentariosSlider() {
  const [comentarios, setComentarios] = useState<Comentario[]>(() => {
    const guardados = localStorage.getItem(STORAGE_KEY);
    if (guardados) return JSON.parse(guardados) as Comentario[];
    return [
      {
        nombre: "Santiago González",
        comentario:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        avatar: `${BASE_URL}/imagenes/avatarr/1.png`,
      },
      {
        nombre: "Juan González",
        comentario:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        avatar: `${BASE_URL}/imagenes/avatarr/2.png`,
      },
    ];
  });

  const [nombre, setNombre] = useState(() => localStorage.getItem("nombreGuardado") || "");
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [avatarSeleccionado, setAvatarSeleccionado] = useState(() => localStorage.getItem("avatarGuardado") || "");
  const [avatares, setAvatares] = useState<string[]>([]);

  // Estado para login admin
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem(STORAGE_LOGIN_KEY) === "true");
  const [inputPassword, setInputPassword] = useState("");

  // Carga los avatares disponibles al montar el componente
  useEffect(() => {
    setAvatares([
      `${BASE_URL}/imagenes/avatarr/1.png`,
      `${BASE_URL}/imagenes/avatarr/2.png`,
      `${BASE_URL}/imagenes/avatarr/3.png`,
      `${BASE_URL}/imagenes/avatarr/4.png`,
      `${BASE_URL}/imagenes/avatarr/5.png`,
    ]);
  }, []);

  // Guarda en localStorage los comentarios, nombre, avatar y estado admin
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(comentarios)), [comentarios]);
  useEffect(() => localStorage.setItem("nombreGuardado", nombre), [nombre]);
  useEffect(() => localStorage.setItem("avatarGuardado", avatarSeleccionado), [avatarSeleccionado]);
  useEffect(() => localStorage.setItem(STORAGE_LOGIN_KEY, isAdmin.toString()), [isAdmin]);

  // Atajo para alternar modo admin (Ctrl+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "a") {
        setIsAdmin((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const configuracionSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const agregarComentario = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = nuevoComentario.trim();
    const nombreUsuario = nombre.trim();

    if (!texto || !nombreUsuario || !avatarSeleccionado) {
      alert("Por favor completa nombre, comentario y selecciona un avatar.");
      return;
    }

    setComentarios([
      ...comentarios,
      {
        nombre: nombreUsuario,
        comentario: texto,
        avatar: avatarSeleccionado,
      },
    ]);
    setNuevoComentario("");
  };

  const eliminarComentario = (indice: number) => {
    if (!isAdmin) {
      alert("No tienes permiso para eliminar comentarios");
      return;
    }
    setComentarios(comentarios.filter((_, i) => i !== indice));
  };

  const manejarLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === PASSWORD) {
      setIsAdmin(true);
      setInputPassword("");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const manejarLogout = () => {
    if (window.confirm("¿Seguro que quieres salir del modo administrador?")) {
      setIsAdmin(false);
    }
  };

  return (
    <div className="pantalla">
      <div className="contenedor-slider">
        <Slider {...configuracionSlider}>
          {comentarios.map((coment, indice) => (
            <div key={indice} className="mi-slide">
              <div className="comentario-box">
                {isAdmin && (
                  <button
                    onClick={() => eliminarComentario(indice)}
                    className="boton-eliminar"
                    aria-label={`Eliminar comentario de ${coment.nombre}`}
                  >
                    ❌
                  </button>
                )}
                <img
                  src={coment.avatar}
                  alt={`Avatar de ${coment.nombre}`}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    marginBottom: 15,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h3>{coment.nombre}</h3>
                <p>{coment.comentario}</p>
              </div>
            </div>
          ))}
        </Slider>

        <form onSubmit={agregarComentario} className="formulario-comentario">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className="input-comentario"
          />

          <input
            type="text"
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            placeholder="Escribe un comentario..."
            className="input-comentario"
          />

          <div
            style={{
              margin: "20px 0",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {avatares.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`Avatar ${i + 1}`}
                onClick={() => setAvatarSeleccionado(url)}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  border: avatarSeleccionado === url ? "3px solid #00bfff" : "2px solid gray",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          <button type="submit" className="boton-comentar">
            Comentar
          </button>
        </form>

        {/* Login admin separado para evitar anidación incorrecta de formularios */}
        <div className="login-admin-container" style={{ marginTop: "15px" }}>
          {!isAdmin ? (
            <form onSubmit={manejarLogin} className="form-login-admin">
              <input
                type="password"
                placeholder="Contraseña admin"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className="input-admin"
              />
              <button type="submit" className="boton-admin" style={{ marginLeft: 8 }}>
                Entrar
              </button>
            </form>
          ) : (
            <div className="admin-logged-in">
              <span>M. admin activo</span>
              <button onClick={manejarLogout} className="boton-admin">
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
