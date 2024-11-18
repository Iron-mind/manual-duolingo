import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Manual de Duolingo</Link>
      <nav className="nav">
        <div className="nav-links flex gap-6">
          <Link to="/introduccion" className="nav-item">Introduccion</Link>
          <Link to="/guia-de-inicio/crear-cuenta" className="nav-item">Inicio</Link>
          <Link to="/interfaz/cuentos" className="nav-item">Interfaz</Link>
          <Link to="/recompensas-y-vidas" className="nav-item">Recompenzas</Link>
          <Link to="/" className="nav-item">Preguntas Frecuentes</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
