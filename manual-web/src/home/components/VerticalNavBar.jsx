import React, { useState } from 'react';
import './VerticalNavBar.css';
import { Link } from 'react-router-dom';

const VerticalNavBar = () => {
  // Estado para manejar el texto de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Manejar cambios en la barra de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el estado con el nuevo valor del input
  };

  // Lista de los elementos del menú
  const menuItems = [
    "Introducción",
    "Guía de Inicio",
    "Navegación Básica",
    "Funciones Claves",
    "Recursos Adicionales",
    "Documentos de referencia",
    "Espacio de trabajo y barra lateral",
    "Navegacion Basica",
    "Lecciones",
    "Compartir y colaborar",
    "Datos e integraciones",
    "Recompensas y Vidas",
    "Ligas",
    "Desafíos",
    "Rachas",
    "Tienda"
  ];

  // Filtrar los elementos del menú con base en el término de búsqueda
  const filteredItems = menuItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="sidebar">
      <div className="search-box">
        <input
          type="search"
          placeholder="Buscar"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange} // Actualiza el estado al escribir
        />
      </div>
      <div className="sidebar-menu">
        <h2 className="menu-title">Ayuda</h2>
        <ul className="menu-items">
          {/* Aquí mapeamos los elementos filtrados */}
          {filteredItems.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={`/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavBar;