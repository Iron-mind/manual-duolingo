import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Manual de Duolingo</Link>
      <nav className="nav">
        <div className="nav-links flex gap-6">
          <Link to="/introduccion" className="nav-item">Inicio</Link>
          <Link to="https://duolingo.com" className="nav-item">Página Oficial</Link>

          <Link to="/creadores" className="nav-item">Autores</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
