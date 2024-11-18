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

const Recompensas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Recompensas</h2>
        <p>Las recompensas en Duolingo incluyen:</p>
        <ul>
          <li>Monedas adicionales por completar lecciones.</li>
          <img src="https://example.com/imagen-recompensas-1.jpg" alt="Recompensas 1" style={styles.stepImage} />
          <li>Bonificaciones de experiencia por mantener rachas.</li>
          <img src="https://example.com/imagen-recompensas-2.jpg" alt="Recompensas 2" style={styles.stepImage} />
          <li>Trofeos y medallas por alcanzar hitos importantes.</li>
          <img src="https://example.com/imagen-recompensas-3.jpg" alt="Recompensas 3" style={styles.stepImage} />
        </ul>
      </div>
    </div>
  );
};

export default Recompensas;