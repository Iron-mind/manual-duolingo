import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import AccederDesafios from './DesafiosComponents/AccederDesafios';
import DesafiosDiaMes from './DesafiosComponents/DesafiosDiaMes';

const desafiosArticles = [
  {
    title: 'Cómo acceder a desafíos',
    content: 'Para acceder a los desafíos, haz clic en el icono de desafíos en la barra de navegación.',
    image: 'https://example.com/imagen-acceder-desafios.jpg',
    route: 'acceder'
  },
  {
    title: 'Desafíos del día y del mes',
    content: 'Descripción sobre los desafíos del día y del mes.',
    image: 'https://example.com/imagen-desafios-dia-mes.jpg',
    route: 'dia-mes'
  }
];

const Desafios = () => {
  return (
    <div>
      <h1 className="main-title">Guía de Desafíos</h1>
      <Articles articles={desafiosArticles} />
      <Routes>
        <Route path="acceder" element={<AccederDesafios />} />
        <Route path="dia-mes" element={<DesafiosDiaMes />} />
      </Routes>
    </div>
  );
};

export default Desafios;