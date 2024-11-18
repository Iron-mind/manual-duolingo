import React from 'react';
import Articles from '../../components/articles/Articles';
import img1 from  '../../../assets/interfazylecciones/logo1.jpg';
import img2 from  '../../../assets/interfazylecciones/logo2.jpg';
import img3 from  '../../../assets/interfazylecciones/logo3.jpg';
import img4 from  '../../../assets/interfazylecciones/logo4.jpg';
import img5 from  '../../../assets/interfazylecciones/logo5.jpg';
import img6 from  '../../../assets/interfazylecciones/logo6.jpg';
import img7 from  '../../../assets/interfazylecciones/logo7.png';




const articulos = [
  {
    title: '1- Aprender ',
    content: 'Descripcion de el menu aprender, donde se encuantran las lecciones.',
    image: img1 ,
    route: 'interfaz/navegacionbasica'

  },

  {
    title: '2- Sonidos ',
    content: 'Descripcion de el menu sonidos, donde se encuentran lecciones especificas de la fonetica.',
    image: img2,
    route: 'interfaz/sonidos'
  },

  {
    title: '3- Ligas',
    content: 'Descripcion del menu ligas.',
    image: img3,
    route: 'interfaz/ligas'
  },

  {
    title: '4- Desafios',
    content: 'Descripcion del menu desafios. ',
    image: img4,
    route: 'interfaz/DesafiosInterfaz'
  },
  {
    title: '5- Tienda',
    content: 'Descripcion del menu tienda.',
    image: img5,
    route: 'interfaz/tiendainterfaz'
  },
  {
    title: '6- Perfil',
    content: 'Descripcion del menu perfil.',
    image: img6,
    route: 'interfaz/perfilinterfaz'
  },
  {
    title: '7- Mas / configuracion',
    content: 'Descripcion de el menu configuracion. ',
    image: img7,
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