import React from 'react';
import img1 from  '../../../assets/interfazylecciones/1menu.jpg';
import img2 from  '../../../assets/interfazylecciones/test.jpg';
import img3 from  '../../../assets/interfazylecciones/test1.jpg';



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

const NavegacionBasica = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Seccion aprender  </h2>
        
        <p>Este es el menu primario, donde podemos encontrar las respectivas lecciones de nuetras ruta de aprendizaje. </p>
        <br/>
        <ol>
          <p>El cual luce de la siguiente manera: </p>
          <br/>
          <img src={img1} alt="Paso 1" style={styles.stepImage} />
          <br/>
          <p>Donde podemos ver nuestro el progreso de nuestro aprendizaje, lecciones, y un breve vistazo de nuestro desempeño en las ligas. </p>
          <br/> 
          <p>Esta ruta de aprendizaje se organiza por medio de etapas y lecciones, es decir, entre mas se avance entre las etapas y secciones las lecciones empiezan a ser mas complejas y con mas material. </p>

          <img src={img2} alt="Paso 1" style={styles.stepImage} />
          <br/> 
          <p>Tambien es importante aclarar que el usuario tiene la posibilidad de hacer una leccion un poco mas compleja y con limite de vidas para saltarse una etapa por completo. </p>
          <br/> 
          <img src={img3} alt="Paso 1" style={styles.stepImage} />
          <p>Donde si te quedas sin vidas no podras saltarte dicha etapa, al menos por el momento. </p>


        </ol>
      </div>
    </div>
  );
};

export default NavegacionBasica;