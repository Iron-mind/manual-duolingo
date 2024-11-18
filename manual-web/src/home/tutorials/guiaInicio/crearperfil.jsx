import React from 'react';
import { Link } from 'react-router-dom';
import descargar from '../../../assets/Perfil/descargar.png';
import crearperfil from '../../../assets/Perfil/crearperfil.png';
import idioma from '../../../assets/Perfil/idioma.png';
import meta from '../../../assets/Perfil/meta.png';

import "../../../index.css";

const CrearPerfil = () => {
  return (
    <div className="crear-perfil-container">
      <h1 className="title">Crear Perfil</h1>
      <p className="crear-perfil-description">
        Para crear un perfil en Duolingo, sigue estos pasos detallados:
      </p>

      <div className="step">
        <img className="step-image2" src={descargar} alt="Descargar app" />
        <div className="step-content">
          <h2>1. Descarga la Aplicación o Accede al Sitio Web</h2>
          <p>
              Primero lo primero: descarga la app de Duolingo en tu dispositivo móvil del App Store o Google Play
          </p>
          <p>
            <strong>Aplicación Móvil:</strong> Descarga Duolingo desde el App Store (iOS) o Google Play Store (Android).
          </p>
          <p>
            <strong>Versión Web:</strong> Visita duolingo.com en tu navegador.
          </p>
        </div>
      </div>

      <div className="step">
        <img className="step-image large-image" src={crearperfil} alt="Registro" />
        <div className="step-content">
          <h2>2. Registro</h2>
          <p>
            <strong>Crear una Cuenta:</strong> Al abrir la aplicación o el sitio web, selecciona "Registrarse". Puedes optar por registrarte con tu correo electrónico, cuenta de Google o Facebook.
          </p>
          <p>
            <strong>Completa el Formulario:</strong> Si eliges registrarte con correo electrónico, ingresa tu dirección y crea una contraseña segura.
          </p>
        </div>
      </div>

      <div className="step">
        <img className="step-image" src={idioma} alt="Seleccionar idioma" />
        <div className="step-content">
          <h2>3. Selección de Idioma</h2>
          <p>
            <strong>Elige un Idioma:</strong> Una vez registrado, se te pedirá que selecciones el idioma que deseas aprender. Puedes elegir entre más de 30 idiomas disponibles.
          </p>
        </div>
      </div>

      <div className="step">
        <img className="step-image" src={meta} alt="Establecer metas" />
        <div className="step-content">
          <h2>4. Establecer Metas de Aprendizaje</h2>
          <p>
            <strong>Motivaciones y Metas:</strong> Responde algunas preguntas sobre tus motivaciones para aprender el idioma y establece una meta de aprendizaje (por ejemplo, "Normal", "serio", etc.). Esto se puede ajustar más adelante según tus necesidades.
          </p>
        </div>
      </div>

      <Link className="back-link" to="/guia-de-inicio">Volver a la guía de inicio</Link>
    </div>
  );
};

export default CrearPerfil;
