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

const ComoFuncionanRachas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Cómo funcionan las rachas</h2>
        <p>Para mantener una racha, sigue estos pasos:</p>
        <ol>
          <li>Completa al menos una lección cada día.</li>
          <img src="https://example.com/imagen-funcionan-rachas-1.jpg" alt="Paso 1" style={styles.stepImage} />
          <li>Verifica tu progreso en la sección de rachas.</li>
          <img src="https://example.com/imagen-funcionan-rachas-2.jpg" alt="Paso 2" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default ComoFuncionanRachas;