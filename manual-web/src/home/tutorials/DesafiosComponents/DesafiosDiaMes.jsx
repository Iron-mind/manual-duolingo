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

const DesafiosDiaMes = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Desafíos del día y del mes</h2>
        <p>Descripción sobre los desafíos del día y del mes:</p>
        <ol>
          <li>Desafíos del día: Estos desafíos se actualizan diariamente y te permiten ganar recompensas diarias.</li>
          <img src="https://example.com/imagen-desafios-dia.jpg" alt="Desafíos del día" style={styles.stepImage} />
          <li>Desafíos del mes: Estos desafíos se actualizan mensualmente y te permiten ganar recompensas más grandes.</li>
          <img src="https://example.com/imagen-desafios-mes.jpg" alt="Desafíos del mes" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default DesafiosDiaMes;