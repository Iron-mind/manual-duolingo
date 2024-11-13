import React from 'react';
import './VerticalNavBar.css';
import { Link } from 'react-router-dom';

const VerticalNavBar = () => {
  return (
    <aside class="sidebar">
      <div class="search-box">
        <input type="search" placeholder="Buscar" class="search-input" />
      </div>
      <div class="sidebar-menu">
        <h2 class="menu-title">Ayuda</h2>
        <ul class="menu-items">
          <li class="menu-item">Documentos de referencia</li>
          <li className="menu-item"><Link to="/">Introducción</Link></li>
          <li class="menu-item">Espacio de trabajo y barra lateral</li>
          <li class="menu-item">Páginas y bloques</li>
          <li class="menu-item">Bases de datos</li>
          <li class="menu-item">Compartir y colaborar</li>
          <li class="menu-item">Datos e integraciones</li>
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavBar;