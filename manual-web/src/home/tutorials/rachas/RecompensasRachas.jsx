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

const RecompensasRachas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Recompensas de rachas</h2>
        <p>Las recompensas de rachas incluyen:</p>
        <ul>
          <li>Monedas adicionales.</li>
          <img src="https://example.com/imagen-recompensas-rachas-1.jpg" alt="Recompensas 1" style={styles.stepImage} />
          <li>Bonificaciones de experiencia.</li>
                  </ul>
      </div>
    </div>
  );
};

export default RecompensasRachas;