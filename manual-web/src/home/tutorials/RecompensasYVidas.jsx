import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import PerderYRecuperarVidas from './vidas/PerderYRecuperarVidas';
import Recompensas from './vidas/Recompensas';
import img2 from  '../../assets/vidas/logo1.png';
import img1 from  '../../assets/vidas/logo2.png';

const recompensasYVidasArticles = [
  {
    title: 'Perder y recuperar vidas',
    content: 'Aprende cómo perder y recuperar vidas en Duolingo.',
    image: img2,
    route: 'perder-recuperar-vidas'
  },
  {
    title: 'Recompensas',
    content: 'Descubre las recompensas que puedes obtener en Duolingo.',
    image: img1,
    route: 'recompensas'
  }
];

const RecompensasYVidas = () => {
  return (
    <div>
      <h1 className="main-title">Guía de Recompensas y Vidas</h1>
      <Articles articles={recompensasYVidasArticles} />
      <Routes>
        <Route path="perder-recuperar-vidas" element={<PerderYRecuperarVidas />} />
        <Route path="recompensasVidas" element={<Recompensas />} />
      </Routes>
    </div>
  );
};

export default RecompensasYVidas;