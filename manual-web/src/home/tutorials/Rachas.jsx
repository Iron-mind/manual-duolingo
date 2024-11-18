import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import ComoFuncionanRachas from './rachas/ComoFuncionanRachas';

import AccederRachas from './rachas/AccederRachas';
import MetasRacha from './rachas/MetasRacha';
import RecompensasRachas from './rachas/RecompensasRachas';
import img1 from  '../../assets/rachas/logo1.png';
import img2 from  '../../assets/rachas/logo2.png';
import img3 from  '../../assets/rachas/logo3.png';
import img4 from  '../../assets/rachas/logo4.png';

const rachasArticles = [
  {
    title: 'Cómo acceder a las rachas',
    content: 'Para acceder a las rachas, haz clic en el icono de rachas en la barra de navegación.',
    image: img1,
    route: 'accederRachas'
  },
  {
    title: 'Cómo funcionan las rachas',
    content: 'Para mantener una racha, sigue estos pasos.',
    image: img2,
    route: 'funcionan'
  },
  {
    title: 'Recompensas de rachas',
    content: 'Las recompensas de rachas incluyen monedas adicionales y bonificaciones de experiencia.',
    image: img3,
    route: 'recompensasRachas'
  },
  {
    title: 'Metas de racha',
    content: 'Para establecer y alcanzar metas de racha, sigue estos pasos.',
    image: img4,
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
        <Route path="recompensasRachas" element={<RecompensasRachas />} />
        <Route path="accederRachas" element={<AccederRachas />} />
        <Route path="metas" element={<MetasRacha />} />
      </Routes>
    </div>
  );
};

export default Rachas;