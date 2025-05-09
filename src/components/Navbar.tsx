// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
     <nav>
      <Link to="/">Inicio</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
}

export default Navbar;
