import React, { useState } from 'react';
import './VerticalNavBar.css';
import { Link } from 'react-router-dom';

// Función para convertir texto en un formato adecuado para las URLs
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
  // Estado para manejar el texto de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Manejar cambios en la barra de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el estado con el nuevo valor del input
  };

  // Lista de los elementos del menú
  const menuItems = [
    "Introduccion",
    "Guia de Inicio",
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

  // Mapas de rutas personalizadas
  const routeMappings = {
    "Navegacion Basica": "/interfaz", 
    "Lecciones":"/leccionesDescripcion"
    
  };

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
              {/* Usamos un mapa para las rutas personalizadas */}
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
