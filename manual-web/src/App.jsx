import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ArticlesExample from './home/tutorials/section-example/ArticlesExample';
import VerticalNavBar from './home/components/VerticalNavBar';
import TutorialExample from './home/tutorials/section-example/TutorialExample';
import GuiaDeInicio from './home/tutorials/guiaInicio/GuiaDeInicio';
import CrearPerfil from './home/tutorials/guiaInicio/crearperfil';
import IniciarSesion from './home/tutorials/guiaInicio/IniciarSesion';
import AjustesPersonalizacion from './home/tutorials/guiaInicio/AjustesPersonalizacion';

function App() {

  return (
    <div>
      <header class="header">
        <a href="/" class="logo">Duolingo</a>
        <nav class="nav">
          <h1>Manual de Usuario</h1>
          <p>Bienvenido al manual de usuario de DUOLINGO. Aquí aprenderás cómo usar las funciones principales.</p>
        </nav>
        <button class="get-started-btn">Obtén Duolingo gratis</button>
      </header>

      <div class="container">
        <Router>
          <VerticalNavBar />
          <main class="main-content">


            <Routes>
              <Route path="/" element={<ArticlesExample />} />
              <Route path="/introduccion/" element={<ArticlesExample />} />
              <Route path="/introduccion/tutorial-ejemplo" element={<TutorialExample />} />
              <Route path="/guia-de-inicio" element={<GuiaDeInicio />} />
              <Route path="/crear-perfil" element={<CrearPerfil />} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/ajustes-personalizacion" element={<AjustesPersonalizacion />} />
            </Routes>

          </main>
        </Router>
      </div>
    </div>
  )
}

export default App
