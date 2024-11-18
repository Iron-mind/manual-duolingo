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

const ComprarVidasIlimitadas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Cómo comprar vidas ilimitadas</h2>
        <p>Para comprar vidas ilimitadas, sigue estos pasos:</p>
        <ol>
          <li>Accede a la tienda desde la barra de navegación.</li>
          <img src="https://example.com/imagen-paso-1.jpg" alt="Paso 1" style={styles.stepImage} />
          <li>Selecciona la opción de vidas ilimitadas.</li>
          <img src="https://example.com/imagen-paso-2.jpg" alt="Paso 2" style={styles.stepImage} />
          <li>Haz clic en el botón de compra.</li>
          <img src="https://example.com/imagen-paso-3.jpg" alt="Paso 3" style={styles.stepImage} />
          <li>Confirma tu compra en la ventana emergente.</li>
          <img src="https://example.com/imagen-paso-4.jpg" alt="Paso 4" style={styles.stepImage} />
          <li>Espera a que se procese la compra.</li>
          <img src="https://example.com/imagen-paso-5.jpg" alt="Paso 5" style={styles.stepImage} />
          <li>Disfruta de tus vidas ilimitadas.</li>
          <img src="https://example.com/imagen-paso-6.jpg" alt="Paso 6" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default ComprarVidasIlimitadas;