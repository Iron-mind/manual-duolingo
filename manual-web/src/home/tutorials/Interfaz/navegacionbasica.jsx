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

const NavegacionBasica = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Seccion aprender  </h2>
        <p>Este es el menu primario, donde podemos encontrar las respectivas lecciones de nuetras ruta de aprendizaje. </p>
        <ol>
          <p>El cual luce de la siguiente manera: </p>
          <img src=" " alt="Paso 1" style={styles.stepImage} />
          <p>Donde podemos ver nuestro el progreso de nuestro aprendizaje, lecciones, y un breve vistazo de nuestro desempeño en las ligas. </p>

        </ol>
      </div>
    </div>
  );
};

export default NavegacionBasica;