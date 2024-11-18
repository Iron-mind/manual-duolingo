import React from 'react';
import Articles from '../../components/articles/Articles';
import guia1 from '../../../assets/Perfil/guia1.png';
import guia2 from '../../../assets/Perfil/guia2.png';
import guia3 from '../../../assets/Perfil/guia3.png';

const guiaDeInicio = [
  {
    title: 'Crear Perfil',
    content: 'Para comenzar a usar nuestra plataforma, primero debes crear tu perfil. Ingresa tus datos personales, como nombre, dirección de correo electrónico y otros detalles necesarios. No te olvides de subir una foto de perfil para personalizar tu cuenta.',
    image: guia1,
    route: '/crear-perfil',
  },
  {
    title: 'Inicia Sesión',
    content: 'Iniciar sesión en tu cuenta es muy sencillo. Ingresa tu correo electrónico y contraseña o utiliza opciones de autenticación alternativa como la autenticación de dos factores para mejorar la seguridad.',
    image: guia2,
    route: '/iniciar-sesion',
  },
  {
    title: 'Ajustes y personalización',
    content: 'Una vez tengas tu cuenta creada, puedes personalizar tu experiencia en la plataforma. Desde la configuración de notificaciones hasta la modificación de preferencias de idioma, ajusta todo según tus necesidades.',
    image: guia3,
    route: '/ajustes-personalizacion',
  },
];

const GuiaDeInicio = () => {
  return (
    <div>
      <h1 className="main-title">Guía de Inicio</h1> 
      <Articles articles={guiaDeInicio} />
    </div>
  );
};
export { guiaDeInicio };
export default GuiaDeInicio;
