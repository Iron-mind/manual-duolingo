import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlesExample from './home/tutorials/section-example/ArticlesExample';
import VerticalNavBar from './home/components/VerticalNavBar';
import TutorialExample from './home/tutorials/section-example/TutorialExample';
import Cuentos from './home/tutorials/cuentos/Cuentos';
import Introduccion from './home/tutorials/introduccion/Introduccion';
import RecompensasYVidas from './home/tutorials/RecompensasYVidas';
import Estadisticas from './home/tutorials/Estadisticas';
import Rachas from './home/tutorials/Rachas';
import Tienda from './home/tutorials/Tienda';
import AccederTienda from './home/tutorials/TiendaComponents/AccederTienda';
import ComprarVidasIlimitadas from './home/tutorials/TiendaComponents/ComprarVidasIlimitadas';
import AccederDesafios from './home/tutorials/DesafiosComponents/AccederDesafios';
import DesafiosDiaMes from './home/tutorials/DesafiosComponents/DesafiosDiaMes';
import ComoFuncionanRachas from './home/tutorials/rachas/ComoFuncionanRachas';
import RecompensasRachas from './home/tutorials/rachas/RecompensasRachas';
import AccederRachas from './home/tutorials/rachas/AccederRachas';
import MetasRacha from './home/tutorials/rachas/MetasRacha';
import AccederLigas from './home/tutorials/Ligas/AccederLigas';
import ComoFuncionanLigas from './home/tutorials/Ligas/ComoFuncionanLigas';
import Ligas from './home/tutorials/Ligas';
import PerderYRecuperarVidas from './home/tutorials/vidas/PerderYRecuperarVidas';
import Recompensas from './home/tutorials/vidas/Recompensas';
import NavegacionBasica from './home/tutorials/Interfaz/navegacionbasica';
import ArticulosInterfaz from './home/tutorials/Interfaz/InterfazArticulos';
import LigasInterfaz from './home/tutorials/Interfaz/ligas';
import DesafiosInterfaz from './home/tutorials/Interfaz/desafiosinterfaz';
import TiendaInterfaz from './home/tutorials/Interfaz/tiendainterfaz';
import PerfilInterfaz from './home/tutorials/Interfaz/perfilinterfaz';
import ConfiguracionInterfaz from './home/tutorials/Interfaz/configuracioninterfaz';
import Sonidos from './home/tutorials/Interfaz/sonidos';
import LeccionesArticulos from './home/tutorials/leccionesDescripcion/leccionesArticulos';
import LeccionesPrincipales from './home/tutorials/leccionesDescripcion/leccionesprincipales';
import LeccionesPronunciacion from './home/tutorials/leccionesDescripcion/leccionespronunciacion';
import Desafios from './home/tutorials/Desafios';


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
              <Route path="/introduccion/" element={<Introduccion />} />
              <Route path="/guia-de-inicio/crear-cuenta" element={<ArticlesExample />} />
              <Route path="/guia-de-inicio/personalizar-perfil" element={<ArticlesExample />} />
              <Route path="/introduccion/tutorial-ejemplo" element={<TutorialExample />} />
              <Route path="/interfaz/cuentos" element={<Cuentos />} />
              <Route path="/recompensas-y-vidas" element={<RecompensasYVidas />} />
              <Route path="/Ligas" element={<Ligas />} />
              <Route path="/estadisticas" element={<Estadisticas />} />

              <Route path="/interfaz" element={<ArticulosInterfaz/>} />
              <Route path="/interfaz/navegacionbasica" element={<NavegacionBasica/>} />
              <Route path="/interfaz/sonidos" element={<Sonidos/>} />
              <Route path="/interfaz/ligas" element={<LigasInterfaz/>} />
              <Route path="/interfaz/desafiosinterfaz" element={<DesafiosInterfaz/>} />
              <Route path="/interfaz/tiendainterfaz" element={<TiendaInterfaz/>} />
              <Route path="/interfaz/perfilinterfaz" element={<PerfilInterfaz/>} />
              <Route path="/interfaz/configuracioninterfaz" element={<ConfiguracionInterfaz/>} />

              <Route path="/leccionesDescripcion" element={<LeccionesArticulos/>} />
              <Route path="/leccionesDescripcion/leccionesprincipales" element={<LeccionesPrincipales/>} />
              <Route path="/leccionesDescripcion/leccionespronunciacion" element={<LeccionesPronunciacion/>} />
              <Route path="/desafios" element={<Desafios />} />
              <Route path="/rachas" element={<Rachas />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="acceder" element={<AccederTienda />} />
              <Route path="comprar-vidas-ilimitadas" element={<ComprarVidasIlimitadas />} />
              <Route path="accederDesafios" element={<AccederDesafios />} />
              <Route path="dia-mes" element={<DesafiosDiaMes />} />
              <Route path="funcionan" element={<ComoFuncionanRachas />} />
              <Route path="recompensasRachas" element={<RecompensasRachas />} />
              <Route path="accederRachas" element={<AccederRachas />} />
              <Route path="metas" element={<MetasRacha />} />
              <Route path="accederLigas" element={<AccederLigas />} />
              <Route path="funcionanLigas" element={<ComoFuncionanLigas />} />
              <Route path="perder-recuperar-vidas" element={<PerderYRecuperarVidas />} />
              <Route path="recompensas" element={<Recompensas />} />
            </Routes>

          </main>
        </Router>
      </div>
    </div>
  )
}

export default App
