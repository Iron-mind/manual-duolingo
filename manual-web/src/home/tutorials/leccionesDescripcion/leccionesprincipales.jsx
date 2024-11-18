import React from 'react';
import img1 from  '../../../assets/interfazylecciones/ruta1.jpg';
import img2 from  '../../../assets/interfazylecciones/lec1.jpg';
import img3 from  '../../../assets/interfazylecciones/lec2.jpg';
import img4 from  '../../../assets/interfazylecciones/lec3.jpg';
import img5 from  '../../../assets/interfazylecciones/lec4.jpg';




const styles = {
  manualSection: {
    padding: '20px',
  },
  articleCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  stepImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  },
};

const LeccionesPrincipales = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Lecciones principales </h2>
        <p> Estas son las lecciones principales, la ruta fundamental de aprendizaje </p>
        <br/>
        <ol>
        
          <img src={img1} alt="Paso 1" style={styles.stepImage} />
          <p> Empezando por lecciones basicas y muy simple para empezar a familiarizarse con el lenguaje, para ir subiendo la dificultad con temas mas avanzados. </p>
        
        </ol>
        <br/>
        <p>En cada una de las lecciones podemos encontrar diferentes tipos de preguntas como lo pueden ser: </p>
        <br/>
        <p>1- Seleccion multiple con imagenes: </p>
        <img src={img2} alt="Paso 1" style={styles.stepImage} />

        <br/>
        <p>2- Escuchar escoge la palabra:  </p>
        <img src={img3} alt="Paso 1" style={styles.stepImage} />

        <br/>
        <p>3- Seleccion multiple solo con texto:  </p>
        <img src={img4} alt="Paso 1" style={styles.stepImage} />

        <br/>
        <p>4- Escucha y escoge la frase:   </p>
        <img src={img5} alt="Paso 1" style={styles.stepImage} />

      </div>
    </div>
  );
};

export default LeccionesPrincipales;