import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ArticlesExample from './home/tutorials/section-example/ArticlesExample';
import VerticalNavBar from './home/components/VerticalNavBar';
import TutorialExample from './home/tutorials/section-example/TutorialExample';

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
              <Route path="/guia-de-inicio/crear-cuenta" element={<ArticlesExample />} />
              <Route path="/guia-de-inicio/personalizar-perfil" element={<ArticlesExample />} />
              <Route path="/introduccion/tutorial-ejemplo" element={<TutorialExample />} />
            </Routes>

          </main>
        </Router>
      </div>
    </div>
  )
}

export default App
