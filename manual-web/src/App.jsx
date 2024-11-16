import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ArticlesExample from './home/tutorials/section-example/ArticlesExample';
import VerticalNavBar from './home/components/VerticalNavBar';
import TutorialExample from './home/tutorials/section-example/TutorialExample';
import RecompensasYVidas from './home/tutorials/RecompensasYVidas';
import ProtectoresDeRacha from './home/tutorials/ProtectoresDeRacha';
import Estadisticas from './home/tutorials/Estadisticas';
import Desafios from './home/tutorials/Desafios';
import Rachas from './home/tutorials/Rachas';
import Tienda from './home/tutorials/Tienda';
import AccederTienda from './home/tutorials/TiendaComponents/AccederTienda';
import ComprarVidasIlimitadas from './home/tutorials/TiendaComponents/ComprarVidasIlimitadas';

function App() {

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">Duolingo</a>
        <nav className="nav">
          <h1>Manual de Usuario</h1>
          <p>Bienvenido al manual de usuario de DUOLINGO. Aquí aprenderás cómo usar las funciones principales.</p>
        </nav>
        <button className="get-started-btn">Obtén Duolingo gratis</button>
      </header>

      <div className="container">
        <Router>
          <VerticalNavBar />
          <main className="main-content">


            <Routes>
              <Route path="/" element={<ArticlesExample />} />
              <Route path="/introduccion/" element={<ArticlesExample />} />
              <Route path="/guia-de-inicio/crear-cuenta" element={<ArticlesExample />} />
              <Route path="/guia-de-inicio/personalizar-perfil" element={<ArticlesExample />} />
              <Route path="/introduccion/tutorial-ejemplo" element={<TutorialExample />} />
              <Route path="/recompensas-y-vidas" element={<RecompensasYVidas />} />
              <Route path="/protectores-de-racha" element={<ProtectoresDeRacha />} />
              <Route path="/estadisticas" element={<Estadisticas />} />
              <Route path="/desafios" element={<Desafios />} />
              <Route path="/rachas" element={<Rachas />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="acceder" element={<AccederTienda />} />
        <Route path="comprar-vidas-ilimitadas" element={<ComprarVidasIlimitadas />} />
  
            </Routes>

          </main>
        </Router>
      </div>
    </div>
  )
}

export default App
