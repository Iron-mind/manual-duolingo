import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import AccederLigas from './Ligas/AccederLigas';
import ComoFuncionanLigas from './Ligas/ComoFuncionanLigas';

import img3 from  '../../assets/interfazylecciones/logo3.jpg';
import img4 from  '../../assets/interfazylecciones/ligas.jpg';




const ligasArticles = [
  {
    title: 'Cómo acceder a las ligas',
    content: 'Para acceder a las ligas, haz clic en el icono de ligas en la barra de navegación.',
    image: img3,
    route: 'accederLigas'
  },
  {
    title: 'Cómo funcionan las ligas',
    content: 'Para entender cómo funcionan las ligas, sigue estos pasos.',
    image: img4,
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