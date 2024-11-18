import React from 'react';
import img7 from  '../../../assets/interfazylecciones/7configuracion.jpg';


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

const ConfiguracionInterfaz = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2> Seccion Configuracion  </h2>
        <p> Este es el menu de configuracion, donde tenemos la oportunidad de cambiar nuestras preferencias e informacion.  </p>
        <ol>
          <p>El cual luce de la siguiente manera: </p>
          <img src={img7} alt="Paso 1" style={styles.stepImage} />
          <p> En este menu tenemos la oportunidad de acceder o manipular: </p>
          <li> Preferencias </li>
          <li> Perfil</li>
          <li> Notificaciones </li>
          <li> Cursos </li>
          <li> Duolingo For Schools</li> 
          <li> Redes Sociales </li>
          <li> Ajustes de privacidad  </li>
          <li> Centro de ayuda   </li>
          


        </ol>
      </div>
    </div>
  );
};

export default ConfiguracionInterfaz;