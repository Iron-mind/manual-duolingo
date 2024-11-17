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

const ComoFuncionanLigas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Cómo funcionan las ligas</h2>
        <p>Para entender cómo funcionan las ligas, sigue estos pasos:</p>
        <ol>
          <li>Participa en las lecciones diarias para ganar puntos.</li>
          <img src="https://example.com/imagen-funcionan-ligas-1.jpg" alt="Paso 1" style={styles.stepImage} />
          <li>Verifica tu posición en la tabla de clasificación de ligas.</li>
          <img src="https://example.com/imagen-funcionan-ligas-2.jpg" alt="Paso 2" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default ComoFuncionanLigas;