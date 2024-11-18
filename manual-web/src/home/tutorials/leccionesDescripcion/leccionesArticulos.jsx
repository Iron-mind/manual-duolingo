import React from 'react';
import Articles from '../../components/articles/Articles';
import img1 from  '../../../assets/interfazylecciones/logo1.jpg';
import img2 from  '../../../assets/interfazylecciones/logo2.jpg';



const articulos = [
  {
    title: '1- Lecciones principales  ',
    content: 'Descripcionde las lecciones principales, estas son el camino principal de tu ruta de aprendizaje',
    image: img1,
    route: 'leccionesDescripcion/leccionesprincipales'
    
  },

  {
    title: '2- Lecciones de pronunciacion ',
    content: 'Descripcion de las lecciones de pronunciacion, dichas lecciones estan enfocadas principalmente en la escucha y pronunciacion de tu lenguaje seleccionado. ',
    image: img2,
    route: 'leccionesDescripcion/leccionespronunciacion'
  }

]
const LeccionesArticulos = () => {
  return (
    <div>
      <h1 class="main-title">Menus</h1>
      <Articles articles={articulos} />
      <button>Start Now</button>
    </div>
  );
};

export default LeccionesArticulos;