import React, { useState } from 'react';
import './VerticalNavBar.css';
import { Link } from 'react-router-dom';

const slugify = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")               // Normaliza caracteres acentuados a su forma base
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .replace(/\s+/g, '-')            // Reemplaza los espacios por guiones
    .replace(/[^\w\-]+/g, '')        // Elimina caracteres no alfanuméricos
    .replace(/\-\-+/g, '-')          // Reemplaza guiones dobles por un solo guion
    .replace(/^-+/, '')              // Elimina guiones al principio
    .replace(/-+$/, '');             // Elimina guiones al final
};

const VerticalNavBar = () => {

  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const menuItems = [
    "Introduccion",
    "Guia de Inicio",
    "Navegacion Basica",
    "Lecciones",
    "Recompensas y Vidas",
    "Ligas",
    "Desafíos",
    "Rachas",
    "Tienda"
  ];


  const routeMappings = {
    "Navegacion Basica": "/interfaz", 
    "Lecciones":"/leccionesDescripcion"
    
  };

 
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
          onChange={handleSearchChange} 
        />
      </div>
      <div className="sidebar-menu">
        <h2 className="menu-title">Ayuda</h2>
        <ul className="menu-items">
          {filteredItems.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={routeMappings[item] || `/${slugify(item)}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavBar;
