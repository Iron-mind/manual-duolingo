import React from 'react';
import img5 from  '../../../assets/interfazylecciones/5tienda.jpg';


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

const TiendaInterfaz = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2> Seccion Tienda  </h2>
        <p>Este es el menu tienda, donde podemos obtener potenciadores o protectores de racha haciendo uso de las gemas recibidas como recompensa de los desafios. </p>
        <ol>
        <br/>
          <p>El cual luce de la siguiente manera: </p>
          <br/>
          <img src={img5} alt="Paso 1" style={styles.stepImage} />
          <p>    </p>

        </ol>
      </div>
    </div>
  );
};

export default TiendaInterfaz;