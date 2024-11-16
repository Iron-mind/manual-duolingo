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
          <li className="menu-item">Documentos de referencia</li>
          <li className="menu-item"><Link to="/">Introducción</Link></li>
          <li className="menu-item">Espacio de trabajo y barra lateral</li>
          <li className="menu-item">Páginas y bloques</li>
          <li className="menu-item">Bases de datos</li>
          <li className="menu-item">Compartir y colaborar</li>
          <li className="menu-item">Datos e integraciones</li>
          <li className="menu-item"><Link to="/recompensas-y-vidas">Recompensas y Vidas</Link></li>
          <li className="menu-item"><Link to="/protectores-de-racha">Protectores de Racha</Link></li>
          <li className="menu-item"><Link to="/estadisticas">Estadísticas</Link></li>
          <li className="menu-item"><Link to="/desafios">Desafíos</Link></li>
          <li className="menu-item"><Link to="/rachas">Rachas</Link></li>
          <li className="menu-item"><Link to="/tienda">Tienda</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavBar;