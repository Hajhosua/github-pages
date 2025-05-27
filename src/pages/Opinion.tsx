import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function ComentariosSlider() {
  const [comentarios, setComentarios] = useState([
    {
      nombre: "Santiago González",
      comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatar: "./public/imagenes/avatarr/1.png",
    },
    {
      nombre: "Juan González",
      comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "./public/imagenes/avatarr/2.png",
    },
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nombre, setNombre] = useState("");
  const [avatarSeleccionado, setAvatarSeleccionado] = useState("");
  const [avatares, setAvatares] = useState<string[]>([]);

  useEffect(() => {
    setAvatares([
      "./public/imagenes/avatarr/1.png",
      "./public/imagenes/avatarr/2.png",
      "./public/imagenes/avatarr/3.png",
      "./public/imagenes/avatarr/4.png",
      "./public/imagenes/avatarr/5.png",
    ]);
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
    setNombre("");
    setAvatarSeleccionado("");
  };

  const eliminarComentario = (indice: number) => {
    setComentarios(comentarios.filter((_, i) => i !== indice));
  };

  return (
    <div className="pantalla">
      <div className="contenedor-slider">
        <Slider {...configuracionSlider}>
          {comentarios.map((coment, indice) => (
            <div key={indice} className="mi-slide">
              <div className="comentario-box">
                <button
                  onClick={() => eliminarComentario(indice)}
                  className="boton-eliminar"
                >
                  ❌
                </button>
                <img
                  src={coment.avatar}
                  alt="avatar"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    marginBottom: 10,
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
                  border:
                    avatarSeleccionado === url
                      ? "3px solid #00bfff"
                      : "2px solid gray",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          <button type="submit" className="boton-comentar">
            Comentar
          </button>
        </form>
      </div>
    </div>
  );
}
