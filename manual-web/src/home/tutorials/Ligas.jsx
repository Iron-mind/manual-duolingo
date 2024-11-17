import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import AccederLigas from './Ligas/AccederLigas';
import ComoFuncionanLigas from './Ligas/ComoFuncionanLigas';


const ligasArticles = [
  {
    title: 'Cómo acceder a las ligas',
    content: 'Para acceder a las ligas, haz clic en el icono de ligas en la barra de navegación.',
    image: 'https://example.com/imagen-acceder-ligas.jpg',
    route: 'accederLigas'
  },
  {
    title: 'Cómo funcionan las ligas',
    content: 'Para entender cómo funcionan las ligas, sigue estos pasos.',
    image: 'https://example.com/imagen-funcionan-ligas.jpg',
    route: 'funcionanLigas'
  }
];

const Ligas = () => {
  return (
    <div>
      <h1 className="main-title">Guía de Ligas</h1>
      <Articles articles={ligasArticles} />
      <Routes>
        <Route path="accederLigas" element={<AccederLigas />} />
        <Route path="funcionanLigas" element={<ComoFuncionanLigas />} />
      </Routes>
    </div>
  );
};

export default Ligas;