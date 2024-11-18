import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import AccederDesafios from './DesafiosComponents/AccederDesafios';
import DesafiosDiaMes from './DesafiosComponents/DesafiosDiaMes';
import img3 from  '../../assets/desafios/logo3.png';
import img2 from  '../../assets/desafios/logo4.png';
import img4 from  '../../assets/interfazylecciones/logo4.jpg';

const desafiosArticles = [
  {
    title: 'Cómo acceder a desafíos',
    content: 'Para acceder a los desafíos, haz clic en el icono de desafíos en la barra de navegación.',
    image: img2,
    route: 'accederDesafios'
  },
  {
    title: 'Desafíos del día y del mes',
    content: 'Descripción sobre los desafíos del día y del mes.',
    image: img3,
    route: 'dia-mes'
  }
];

const Desafios = () => {
  return (
    <div>
      <h1 className="main-title">Guía de Desafíos</h1>
      <Articles articles={desafiosArticles} />
      <Routes>
        <Route path="accederDesafios" element={<AccederDesafios />} />
        <Route path="dia-mes" element={<DesafiosDiaMes />} />
      </Routes>
    </div>
  );
};

export default Desafios;