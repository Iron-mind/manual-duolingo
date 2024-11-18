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
    
  },
  {
    title: '8- Aprende con Cuentos',
    content: 'Descripcion de el menu  aprender con cuentos. ',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fduolingo%2Fimages%2F1%2F1f%2FCuentos_Duolingo_ABC.png%2Frevision%2Flatest%2Fscale-to-width-down%2F185%3Fcb%3D20221006210511%26path-prefix%3Des&f=1&nofb=1&ipt=a220eedc8de2f3ef4bd8a168e351da26b503b127bc96bd290acf327e7b2ff1f0&ipo=images',
    route: 'interfaz/cuentos'
  }
]
const ArticulosInterfaz = () => {
  return (
    <div>
      <h1 class="main-title">Menus</h1>
      <Articles articles={articulos} />
    </div>
  );
};

export default ArticulosInterfaz;