import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import AccederTienda from './TiendaComponents/AccederTienda';
import ComprarVidasIlimitadas from './TiendaComponents/ComprarVidasIlimitadas';
import img1 from  '../../assets/interfazylecciones/logo5.jpg';
import img2 from  '../../assets/tienda/Logo2.png';

const tiendaArticles = [
  {
    title: 'Cómo acceder a la tienda',
    content: 'Para acceder a la tienda, haz clic en el icono de la tienda en la barra de navegación.',
    image: img1,
    route: 'acceder'
  },
  {
    title: 'Cómo comprar vidas ilimitadas',
    content: 'Para comprar vidas ilimitadas, sigue estos pasos detallados.',
    image: img2,
    route: 'comprar-vidas-ilimitadas'
  }
];

const Tienda = () => {
  return (
    <div>
      <h1 className="main-title">Guía de la Tienda</h1>
      <Articles articles={tiendaArticles} />
      <Routes>
      <Route path="acceder" element={<AccederTienda />} />
        <Route path="comprar-vidas-ilimitadas" element={<ComprarVidasIlimitadas />} />
       </Routes>
    </div>
  );
};

export default Tienda;