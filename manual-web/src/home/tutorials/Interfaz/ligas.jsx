import React from 'react';

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
          <img src=" " alt="Paso 1" style={styles.stepImage} />
          <p>  </p>

        </ol>
      </div>
    </div>
  );
};

export default LigasInterfaz;