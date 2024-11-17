import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import ComoFuncionanRachas from './rachas/ComoFuncionanRachas';
import RecompensasRachas from './rachas/RecompensasRachas';
import AccederRachas from './rachas/AccederRachas';
import MetasRacha from './rachas/MetasRacha';

const rachasArticles = [
  {
    title: 'Cómo acceder a las rachas',
    content: 'Para acceder a las rachas, haz clic en el icono de rachas en la barra de navegación.',
    image: 'https://example.com/imagen-acceder-rachas.jpg',
    route: 'accederRachas'
  },
  {
    title: 'Cómo funcionan las rachas',
    content: 'Para mantener una racha, sigue estos pasos.',
    image: 'https://example.com/imagen-funcionan-rachas.jpg',
    route: 'funcionan'
  },
  {
    title: 'Recompensas de rachas',
    content: 'Las recompensas de rachas incluyen monedas adicionales y bonificaciones de experiencia.',
    image: 'https://example.com/imagen-recompensas-rachas.jpg',
    route: 'recompensas'
  },
  {
    title: 'Metas de racha',
    content: 'Para establecer y alcanzar metas de racha, sigue estos pasos.',
    image: 'https://example.com/imagen-metas-racha.jpg',
    route: 'metas'
  }
];

const Rachas = () => {
  return (
    <div>
      <h1 className="main-title">Guía de Rachas</h1>
      <Articles articles={rachasArticles} />
      <Routes>
        <Route path="funcionan" element={<ComoFuncionanRachas />} />
        <Route path="recompensas" element={<RecompensasRachas />} />
        <Route path="accederRachas" element={<AccederRachas />} />
        <Route path="metas" element={<MetasRacha />} />
      </Routes>
    </div>
  );
};

export default Rachas;