import React from 'react';
import recompensasRachas from '../../../assets/rachas/metaRacha.png';

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
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Metas de racha</h1>
        <p className="text-gray-600 text-lg">Para establecer y alcanzar metas de racha, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Establece una meta de días consecutivos.</span>
              <p className="text-gray-600">Comprométete a mantener una racha de cierta cantidad de días consecutivos. Esto te ayudará a mantener la motivación y a alcanzar tus objetivos de aprendizaje.</p>
              <img src={recompensasRachas} alt="Paso 1" className="w-full responsive-img mb-2" />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default MetasRacha;