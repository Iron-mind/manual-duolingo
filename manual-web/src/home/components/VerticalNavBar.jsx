import React from 'react';
import './VerticalNavBar.css';
import { Link } from 'react-router-dom';

const VerticalNavBar = () => {
  return (
    <aside className="sidebar">
      <div className="search-box">
        <input type="search" placeholder="Buscar" className="search-input" />
      </div>
      <div className="sidebar-menu">
        <h2 className="menu-title">Ayuda</h2>
        <ul className="menu-items">
          <li className="menu-item"><Link to="/">Introducción</Link></li>
          <li className="menu-item"><Link to="/guia-de-inicio">Guía de Inicio</Link></li>
          <li className="menu-item">Navegación Básica</li>
          <li className="menu-item">Funciones Claves</li>
          <li className="menu-item">Recursos Adicionales</li>
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavBar;
