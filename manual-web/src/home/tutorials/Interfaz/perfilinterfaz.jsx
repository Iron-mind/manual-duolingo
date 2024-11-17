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

const PerfilInterfaz = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2> Seccion perfil  </h2>
        <p> Este es el menu del perfil, donde tenemos la oportunidad de editar nuestro avatar, ver nuestra informacion personal, estadisticas y logros.   </p>
        <ol>
          <p>El cual luce de la siguiente manera: </p>
          <img src=" " alt="Paso 1" style={styles.stepImage} />
          <p> En cuanto a las estadisticas podemos encontrar informacion especifica sobre:  </p>
          <li> Dias de racha.</li>
          <li> Experiencia total.</li>
          <li> Division actual. </li>
          <li> Numero de veces en el top 3. </li>
          


        </ol>
      </div>
    </div>
  );
};

export default PerfilInterfaz;