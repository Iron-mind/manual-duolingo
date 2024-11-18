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

const AccederTienda = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Cómo acceder a la tienda</h2>
        <p>Para acceder a la tienda, sigue estos pasos:</p>
        <ol>
          <li>Haz clic en el icono de la tienda en la barra de navegación.</li>
          <img src="https://example.com/imagen-paso-1.jpg" alt="Paso 1" style={styles.stepImage} />
          <li>Serás redirigido a la página de la tienda donde podrás ver todos los ítems disponibles.</li>
          <img src="https://example.com/imagen-paso-2.jpg" alt="Paso 2" style={styles.stepImage} />
        </ol>
      </div>
    </div>
  );
};

export default AccederTienda;