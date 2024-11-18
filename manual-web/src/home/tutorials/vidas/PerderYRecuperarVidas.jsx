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

const PerderYRecuperarVidas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Perder y recuperar vidas</h2>
        <h3>Perder vidas</h3>
        <ol>
          <li>Si fallas una lección, perderás una vida.</li>
          <img src="https://example.com/imagen-perder-vidas-1.jpg" alt="Perder vidas 1" style={styles.stepImage} />
          <li>Verifica tu contador de vidas para ver cuántas te quedan.</li>
          <img src="https://example.com/imagen-perder-vidas-2.jpg" alt="Perder vidas 2" style={styles.stepImage} />
        </ol>
        <h3>Recuperar vidas</h3>
        <ol>
          <li>Completa una lección sin errores para recuperar una vida.</li>
          <img src="https://example.com/imagen-recuperar-vidas-1.jpg" alt="Recuperar vidas 1" style={styles.stepImage} />
          <li>Espera a que se recargue tu contador de vidas.</li>
          <img src="https://example.com/imagen-recuperar-vidas-2.jpg" alt="Recuperar vidas 2" style={styles.stepImage} />
          <li>Compra vidas adicionales en la tienda.</li>
          <img src="https://example.com/imagen-recuperar-vidas-3.jpg" alt="Recuperar vidas 3" style={styles.stepImage} />
          <li>Utiliza un potenciador de vidas para recuperar todas tus vidas.</li>
          <img src="https://example.com/imagen-recuperar-vidas-4.jpg" alt="Recuperar vidas 4" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default PerderYRecuperarVidas;