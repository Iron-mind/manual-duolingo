import React from 'react';
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
<<<<<<< HEAD
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

=======
>>>>>>> bb7db9bbfd195424578c47c6e1e2db0e346b28bf
  return (
    <aside className="sidebar">
      <div className="search-box">
        <input type="search" placeholder="Buscar" className="search-input" />
      </div>
      <div className="sidebar-menu">
        <h2 className="menu-title">Ayuda</h2>
        <ul className="menu-items">
<<<<<<< HEAD
          {/* Aquí mapeamos los elementos filtrados */}
          {filteredItems.map((item, index) => (
            <li key={index} className="menu-item">
              {/* Usamos un mapa para las rutas personalizadas */}
              <Link to={routeMappings[item] || `/${slugify(item)}`}>
                {item}
              </Link>
            </li>
          ))}
=======
          <li className="menu-item"><Link to="/">Introducción</Link></li>
          <li className="menu-item"><Link to="/guia-de-inicio">Guía de Inicio</Link></li>
          <li className="menu-item">Navegación Básica</li>
          <li className="menu-item">Funciones Claves</li>
          <li className="menu-item">Recursos Adicionales</li>
          <li className="menu-item">Documentos de referencia</li>
          <li className="menu-item">Espacio de trabajo y barra lateral</li>
          <li className="menu-item"><Link to="/interfaz">Navegacion Basica</Link></li>
          <li className="menu-item"> <Link to="/leccionesDescripcion">Lecciones </Link> </li>
          <li className="menu-item">Compartir y colaborar</li>
          <li className="menu-item">Datos e integraciones</li>
          <li className="menu-item"><Link to="/recompensas-y-vidas">Recompensas y Vidas</Link></li>
          <li className="menu-item"><Link to="/ligas">Ligas</Link></li>
          <li className="menu-item"><Link to="/desafios">Desafíos</Link></li>
          <li className="menu-item"><Link to="/rachas">Rachas</Link></li>
          <li className="menu-item"><Link to="/tienda">Tienda</Link></li>
>>>>>>> bb7db9bbfd195424578c47c6e1e2db0e346b28bf
        </ul>
      </div>
    </aside>
  );
};

export default VerticalNavBar;
