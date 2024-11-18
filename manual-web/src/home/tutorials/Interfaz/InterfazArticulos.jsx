import React from 'react';
import Articles from '../../components/articles/Articles';
const articulos = [
  {
    title: '1- Aprender ',
    content: 'Descripcion de el menu aprender, donde se encuantran las lecciones.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/navegacionbasica'

  },

  {
    title: '2- Sonidos ',
    content: 'Descripcion de el menu sonidos, donde se encuentran lecciones especificas de la fonetica.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/sonidos'
  },

  {
    title: '3- Ligas',
    content: 'Descripcion del menu ligas.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/ligas'
  },

  {
    title: '4- Desafios',
    content: 'Descripcion del menu desafios. ',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/DesafiosInterfaz'
  },
  {
    title: '5- Tienda',
    content: 'Descripcion del menu tienda.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/tiendainterfaz'
  },
  {
    title: '6- Perfil',
    content: 'Descripcion del menu perfil.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/perfilinterfaz'
  },
  {
    title: '7- Mas / configuracion',
    content: 'Descripcion de el menu configuracion. ',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'interfaz/configuracioninterfaz'
    
  }
]
const ArticulosInterfaz = () => {
  return (
    <div>
      <h1 class="main-title">Menus</h1>
      <Articles articles={articulos} />
      <button>Start Now</button>
    </div>
  );
};

export default ArticulosInterfaz;