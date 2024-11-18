import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import per1 from '../../../assets/Perfil/per1.png';
import per2 from '../../../assets/Perfil/per2.png';
import per3 from '../../../assets/Perfil/per3.png';
import per4 from '../../../assets/Perfil/per4.png';
import per5 from '../../../assets/Perfil/per5.png';


const AjustesPersonalizacion = () => {
  return (
    <div className="ajustes-container">
      <h1 className="title">Ajustes y Personalización en Duolingo</h1>

      <div className="step">
        <img
          className="step-image"
          src={per1}
          alt="Acceso a tu perfil"
        />
        <div className="step-content">
          <h2>1. Acceso a tu Perfil</h2>
          <p>
            Dirígete a tu perfil tocando el ícono de persona en la esquina inferior derecha de la pantalla. 
            Esto te llevará a tu página de perfil.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={per2} 
          alt="Entrar en configuración"
        />
        <div className="step-content">
          <h2>2. Entrar en Configuración</h2>
          <p>
            Una vez en tu perfil, busca el ícono de engranaje o la opción "Configuración". Al seleccionarlo, accederás a un menú donde podrás ajustar diferentes aspectos de tu experiencia de aprendizaje.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={per3}
          alt="Ajustes y Personalización"
        />
        <div className="step-content">
          <h2>3. Ajustes y Personalización</h2>
          <p>Adapta la experiencia de aprendizaje a tu manera:</p>
          <ul>
            <li><strong>Activa Recordatorios:</strong> Activa recordatorios diarios para que aprender se vuelva un hábito.</li>
            <li><strong>Incluye Prácticas de Comprensión y Conversación:</strong> Habilita ejercicios específicos que se centren en la comprensión auditiva y conversación.</li>
          </ul>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={per4}
          alt="Personalización del aprendizaje"
        />
        <div className="step-content">
          <h2>4. Recordatorios practica</h2>
          <p>En la sección de configuración, puedes configurar los recordatorios:</p>
          <ul>
          <li>
              <strong>Activar Recordatorios:</strong> Activa los recordatorios diarios para recibir notificaciones que te animen a practicar y mantener tu rutina de estudio.
            </li>
            <li>
              <strong>Personalizar Frecuencia:</strong> Ajusta la frecuencia de los recordatorios (diarios, semanales) según tu disponibilidad y preferencias.
            </li>
            <li>
              <strong>Seleccionar Horarios:</strong> Elige los horarios en los que prefieres recibir los recordatorios para que se adapten a tu rutina diaria.
            </li>
          </ul>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={per5}
          alt="Cambiar Avatar"
        />
        <div className="step-content">
          <h2>5. Cambiar Avatar</h2>
          <p>
            Desde tu perfil, toca sobre tu imagen actual o el ícono de configuración para acceder al creador de avatares. Personaliza tu avatar eligiendo diferentes características como peinados, expresiones faciales y accesorios.
          </p>
        </div>
      </div>
 
      <Link className="back-link" to="/guia-de-inicio">Volver a la guía de inicio</Link>
    </div>
  );
};

export default AjustesPersonalizacion;
