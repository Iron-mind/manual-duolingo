import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css'; // Asegúrate de que esté bien importado tu archivo CSS

const AjustesPersonalizacion = () => {
  return (
    <div className="ajustes-container">
      <h1 className="title">Ajustes y Personalización en Duolingo</h1>

      <div className="step">
        <img
          className="step-image"
          src="ruta-de-imagen-1.jpg" // Cambia esta ruta por la imagen que necesites
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
          src="ruta-de-imagen-2.jpg" // Cambia esta ruta por la imagen que necesites
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
          src="ruta-de-imagen-3.jpg" // Cambia esta ruta por la imagen que necesites
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
          src="ruta-de-imagen-4.jpg" // Cambia esta ruta por la imagen que necesites
          alt="Personalización del aprendizaje"
        />
        <div className="step-content">
          <h2>4. Personalización del Aprendizaje</h2>
          <p>En la sección de configuración, puedes personalizar aún más tu aprendizaje:</p>
          <ul>
            <li><strong>Ajustes de Idioma:</strong> Selecciona el idioma que deseas aprender o agrega nuevos idiomas.</li>
            <li><strong>Metas de Aprendizaje:</strong> Ajusta tus metas diarias (por ejemplo, "Normal", "Rápido") para que se adapten a tu disponibilidad.</li>
          </ul>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src="ruta-de-imagen-5.jpg" // Cambia esta ruta por la imagen que necesites
          alt="Cambiar Avatar"
        />
        <div className="step-content">
          <h2>5. Cambiar Avatar</h2>
          <p>
            Desde tu perfil, toca sobre tu imagen actual o el ícono de configuración para acceder al creador de avatares. Personaliza tu avatar eligiendo diferentes características como peinados, expresiones faciales y accesorios.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src="ruta-de-imagen-6.jpg" // Cambia esta ruta por la imagen que necesites
          alt="Ajustes adicionales"
        />
        <div className="step-content">
          <h2>6. Ajustes Adicionales</h2>
          <p>
            Revisa y ajusta tus configuraciones de privacidad según prefieras compartir tu progreso con amigos o mantenerlo privado. También puedes configurar las notificaciones para recibir alertas sobre nuevas lecciones.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src="ruta-de-imagen-7.jpg" // Cambia esta ruta por la imagen que necesites
          alt="Guardar cambios"
        />
        <div className="step-content">
          <h2>7. Guardar Cambios</h2>
          <p>Asegúrate de guardar todos los cambios realizados antes de salir de la configuración para que se apliquen correctamente.</p>
        </div>
      </div>

      {/* Volver a la guía de inicio */}
      <Link className="back-link" to="/guia-de-inicio">Volver a la guía de inicio</Link>
    </div>
  );
};

export default AjustesPersonalizacion;
