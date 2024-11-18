import React from 'react';
import { Link } from 'react-router-dom'; 
import inicio1 from '../../../assets/Perfil/inicio1.png';
import inicio2 from '../../../assets/Perfil/inicio2.png';
import inicio3 from '../../../assets/Perfil/inicio3.png';
import inicio4 from '../../../assets/Perfil/inicio4.png';
import inicio5 from '../../../assets/Perfil/inicio5.png';
import inicio6 from '../../../assets/Perfil/inicio6.png';
import inicio7 from '../../../assets/Perfil/inicio7.png';

import "../../../index.css";


const IniciarSesion = () => {
  return (
    <div className="iniciar-sesion-container">
      <h1 className="title">Iniciar Sesión en Duolingo</h1>

      <div className="step">
        <img
          className="step-image2"
          src={inicio1} 
          alt="Aplicación móvil"
        />
        <div className="step-content">
          <h2>1. Abre la Aplicación o el Sitio Web</h2>
          <p>
            <strong>Aplicación Móvil:</strong> Localiza y abre la aplicación Duolingo en tu dispositivo móvil.
            <br />
            <strong>Versión Web:</strong> Abre tu navegador y visita duolingo.com.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image2"
          src={inicio2}
        />
        <div className="step-content">
          <h2>2. ¿Como inicio sesion?</h2>
          <p>
            <strong>Pantalla de Inicio:</strong> En la pantalla principal, busca y selecciona la opción "EMPIEZA AHORA".
            Esta opción se encuentra generalmente en la parte inferior de la pantalla de bienvenida.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={inicio3}
          alt="Ingreso de credenciales"
        />
        <div className="step-content">
          <h2>3. Ingresa tus Credenciales</h2>
          <p>
            <strong>Correo Electrónico y Contraseña:</strong> Si te registraste con tu 
            correo electrónico, ingresa tu dirección de correo y tu contraseña.
            <br />
            Si utilizaste una cuenta de Google o Facebook para registrarte, 
            selecciona el botón correspondiente (Google o Facebook) para iniciar sesión con esa cuenta.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={inicio4}
          alt="olvide contraseña"
        />
        <div className="step-content">
          <h2>4. Olvidé mi contraseña</h2>
          <p>
          Si olvidaste tu contraseña y necesitas una nueva, selecciona “olvide contraseña” 
          en la pantalla de inicio de sesión en la aplicación o visita http://duolingo.com/forgot_password 
          e ingresa la dirección de correo electrónico asociada a tu cuenta en Duolingo.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={inicio5}
          alt="recuperar cuenta"
        />
        <div className="step-content">
          <h2>5. Restablecer contraseña</h2>
          <p>
          Te enviaremos un enlace a esa dirección de correo electrónico que te permitirá crear una nueva contraseña para tu cuenta. Si el correo no aparece en tu bandeja de entrada, asegúrate de revisar tu casilla de spam.
          Si te registraste con una dirección de correo electrónico errónea, no podrás cambiar tu contraseña.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={inicio6}
          alt="Acceso a perfil"
        />
        <div className="step-content">
          <h2>5. Acceso a Tu Perfil</h2>
          <p>
            <strong>Inicio de Sesión Exitoso:</strong> Una vez que ingreses correctamente tus credenciales, serás dirigido a tu perfil donde podrás continuar con tus lecciones y actividades.
          </p>
        </div>
      </div>

      <div className="step">
        <img
          className="step-image"
          src={inicio7}
          alt="Cierre de sesión"
        />
        <div className="step-content">
          <h2>6. Cierre de Sesión (opcional)</h2>
          <p>
            <strong>Cerrar Sesión:</strong> Si deseas cerrar sesión, ve a tu perfil (ícono de persona) y selecciona "Cerrar sesión" al final del menú.
          </p>
        </div>
      </div>
      <Link className="back-link" to="/guia-de-inicio">Volver a la guía de inicio</Link>
    </div>
  );
};

export default IniciarSesion;
