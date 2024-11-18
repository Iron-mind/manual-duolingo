import React from 'react';
import desafioMenu from '../../../assets/desafios/desafioMenu.png';
import desafioDiarios from '../../../assets/desafios/desafioDiarios.png';

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
    width: '50%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  },
};

const DesafiosDiaMes = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Desafíos del día y del mes</h1>
        <p className="text-gray-600 text-lg">Descripción sobre los desafíos del día y del mes:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Desafíos del día</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Participa en los desafíos diarios para ganar recompensas diarias.</span>
              <p className="text-gray-600">Estos desafíos se actualizan diariamente y te permiten ganar recompensas diarias.</p>
              <img src={desafioDiarios} alt="Desafíos del día" style={styles.stepImage1} />
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Desafíos del mes</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Participa en los desafíos mensuales para ganar recompensas más grandes.</span>
              <p className="text-gray-600">Estos desafíos se actualizan mensualmente y te permiten ganar recompensas más grandes.</p>
              <img src={desafioMenu} alt="Desafíos del mes" style={styles.stepImage} />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default DesafiosDiaMes;