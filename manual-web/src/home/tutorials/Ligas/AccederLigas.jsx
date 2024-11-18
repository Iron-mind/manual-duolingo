import React from 'react';
import ligaInicio from '../../../assets/ligas/ligaInicio.png';
import ligas from '../../../assets/ligas/ligas.png';

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

const AccederLigas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo acceder a las ligas</h1>
        <p className="text-gray-600 text-lg">Para acceder a las ligas, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Haz clic en el icono de ligas en la barra de navegación.</span>
              <p className="text-gray-600">El icono de ligas se encuentra en la parte izquierda de la pantalla, representado por un escudo.</p>
              <img src={ligaInicio} alt="Paso 1" style={styles.stepImage} />
            </li>
            <li>
              <span className="font-semibold">Serás redirigido a la página de ligas donde podrás ver tu progreso.</span>
              <p className="text-gray-600">En esta página, podrás ver tu progreso y las recompensas disponibles por participar en las ligas.</p>
              <img src={ligas} alt="Paso 2" style={styles.stepImage} />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default AccederLigas;