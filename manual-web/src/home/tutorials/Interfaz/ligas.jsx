import React from 'react';
import img3 from  '../../../assets/interfazylecciones/3ligas.jpg';
import img4 from  '../../../assets/interfazylecciones/ligas.jpg';



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

const LigasInterfaz = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Seccion Ligas  </h2>
        <p>Este es el menu de Ligas, donde podemos ver a que liga pertenecemos actualmente, nuestro puntaje actual y el tiempo restante por semana. </p>
        <ol>
          <p>El cual luce de la siguiente manera: </p>
          <br/>
          <img src={img3} alt="Paso 1" style={styles.stepImage} />
          <p> Donde semanal mente se deberia quedar al menos en el top 3 de personas con mas experiencia de tu liga para poder ascender a la siguiente liga. </p>
          <img src={img4} alt="Paso 1" style={styles.stepImage} />

        </ol>
      </div>
    </div>
  );
};

export default LigasInterfaz;