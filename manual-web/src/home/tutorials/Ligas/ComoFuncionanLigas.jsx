import React from 'react';
import ligas from '../../../assets/ligas/ligas.png';
import avanzarLigas from '../../../assets/ligas/avanzarLigas.png';

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
  stepImage1: {
    width: '80%',
    height: '400px',
    marginBottom: '20px',
    borderRadius: '8px',
  },
};

const ComoFuncionanLigas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo funcionan las ligas</h1>
        <p className="text-gray-600 text-lg">Para entender cómo funcionan las ligas, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Participa en las lecciones diarias para ganar puntos.</span>
              <p className="text-gray-600">Completa lecciones diarias para acumular puntos y mejorar tu posición en la liga.</p>
              <img src={ligas} alt="Paso 1" style={styles.stepImage} />
            </li>
            <li>
              <span className="font-semibold">Verifica tu posición en la tabla de clasificación de ligas.</span>
              <p className="text-gray-600">Consulta la tabla de clasificación para ver tu posición actual y las recompensas disponibles por avanzar en la liga.</p>
              <img src={avanzarLigas} alt="Paso 2" style={styles.stepImage1} />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default ComoFuncionanLigas;