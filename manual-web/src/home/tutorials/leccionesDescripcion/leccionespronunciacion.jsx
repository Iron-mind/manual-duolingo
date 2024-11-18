import React from 'react';
import img1 from  '../../../assets/interfazylecciones/pro1.jpg';
import img2 from  '../../../assets/interfazylecciones/pro2.jpg';



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

const LeccionesPronunciacion = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2> Lecciones de pronunciacion   </h2>
        <p> Estas son lecciones secundarias, enfocadas en la mejora de la escucha y pronunciacion de el lenguaje seleccionado. </p>
        <ol>
          
          <img src={img1} alt="Paso 1" style={styles.stepImage} />

        </ol>

        <p> los ejercicios se basan en la escucha, donde se repropduce un audio y el usuario debe elegir la respectiva palabra. </p>
        <img src={img2} alt="Paso 1" style={styles.stepImage} />
        <p> Haciedo enfasis en palabras que contengan vocales o consonantes que puedan hacer al usuario confundir algunas palabras entrre si.  </p>


      </div>
    </div>
  );
};

export default LeccionesPronunciacion;