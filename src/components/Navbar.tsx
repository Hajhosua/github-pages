import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'; // Importa el CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Inicio</Link>
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`} // Agregamos la clase 'open' aquí
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
