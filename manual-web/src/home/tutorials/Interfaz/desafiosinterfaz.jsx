import React from 'react';
import img4 from  '../../../assets/interfazylecciones/4desafios.jpg';


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

const DesafiosInterfaz = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Seccion Desafios  </h2>
        <p>Este es el menu desafios, donde podemos encontrar los desafios del dia y su recompensa en experiencia.  </p>
        <ol>
          <p>El cual luce de la siguiente manera: </p>
          <img src={img4} alt="Paso 1" style={styles.stepImage} />
          <p> Todos los dias vas a tener desafios diferentes, con recompesas diferentes.   </p>

        </ol>
      </div>
    </div>
  );
};

export default DesafiosInterfaz;