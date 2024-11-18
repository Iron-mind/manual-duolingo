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
    content: 'Las lecciones principales son el camino principal de tu ruta de aprendizaje. Son muy divertidas y te ayudan a aprender vocabulario, gramática y habilidades de escucha y lectura. ',
    image: img1 ,
    route: 'interfaz/navegacionbasica'

  },

  {
    title: '2- Sonidos ',
    content: 'Puedes aprender a pronunciar palabras en tu idioma objetivo con las lecciones de pronunciación. Escucha y repite palabras y frases para mejorar tu pronunciación. ',
    image: img2,
    route: 'interfaz/sonidos'
  },

  {
    title: '3- Ligas',
    content: 'Con las ligas puedes competir con otros estudiantes de Duolingo. Cada semana, intenta mantenerte en el top 3 de tu liga para ascender a la siguiente liga. ',
    image: img3,
    route: 'interfaz/ligas'
  },

  {
    title: '4- Desafios',
    content: 'Los desafíos son una excelente manera de practicar tus habilidades de idioma. Compite con otros estudiantes para ver quién puede obtener la puntuación más alta. ',
    image: img4,
    route: 'interfaz/DesafiosInterfaz'
  },
  {
    title: '5- Tienda',
    content: 'En la tienda podras comprar items para personalizar tu perfil, como ropa, mascotas y mas. ',
    image: img5,
    route: 'interfaz/tiendainterfaz'
  },
  {
    title: '6- Perfil',
    content: 'Tu perfil es totalmente personalizable. Puedes cambiar tu nombre, foto de perfil, biografía y más. ',
    image: img6,
    route: 'interfaz/perfilinterfaz'
  },
  {
    title: '7- Mas / configuracion',
    content: 'En la sección de configuración puedes ajustar tus preferencias de idioma, notificaciones y más. ',
    image: img7,
    route: 'interfaz/configuracioninterfaz'
    
  },
  {
    title: '8- Aprende con Cuentos',
    content: 'Puedes aprender con cuentos en Duolingo. Lee interesantes historias y mejora tu comprensión lectora.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fduolingo%2Fimages%2F1%2F1f%2FCuentos_Duolingo_ABC.png%2Frevision%2Flatest%2Fscale-to-width-down%2F185%3Fcb%3D20221006210511%26path-prefix%3Des&f=1&nofb=1&ipt=a220eedc8de2f3ef4bd8a168e351da26b503b127bc96bd290acf327e7b2ff1f0&ipo=images',
    route: 'interfaz/cuentos'
  }
]


const ArticulosInterfaz = () => {
  return (
    <div>
      <h1 className="main-title">Menus</h1>
      <Articles articles={articulos} />
    </div>
  );
};

const articulosInterfaz = articulos

export { articulosInterfaz }
export default ArticulosInterfaz;