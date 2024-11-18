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

const MetasRacha = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Metas de racha</h2>
        <p>Para establecer y alcanzar metas de racha, sigue estos pasos:</p>
        <ol>
          <li>Establece una meta diaria de lecciones completadas.</li>
          <img src="https://example.com/imagen-metas-racha-1.jpg" alt="Paso 1" style={styles.stepImage} />
          <li>Monitorea tu progreso y ajusta tus metas según sea necesario.</li>
          <img src="https://example.com/imagen-metas-racha-2.jpg" alt="Paso 2" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default MetasRacha;