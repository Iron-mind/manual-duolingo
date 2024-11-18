import React from 'react';
import verObtenerVidas from '../../../assets/vidas/verObtenerVidas.png';
import vidaFallo from '../../../assets/vidas/vidaFallo.png';

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
    marginBottom: '10px',
    borderRadius: '8px',
  },
  stepImage1: {
    width: '50%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '8px',
  },
};

const PerderYRecuperarVidas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Perder y recuperar vidas</h1>
        <p className="text-gray-600 text-lg">Para perder y recuperar vidas en Duolingo, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Perder vidas</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Si fallas una lección, perderás una vida.</span>
              <p className="text-gray-600">Cada vez que cometas un error en una lección, perderás una vida.</p>
              <img src={vidaFallo} alt="Perder vidas" style={styles.stepImage} />
            </li>
          </ol>
          <h3 className="text-2xl font-semibold text-gray-800">Recuperar vidas</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Verifica tu contador de vidas para ver cuántas te quedan.</span>
              <p className="text-gray-600">Puedes ver cuántas vidas te quedan en el contador de vidas.</p>
              <img src={verObtenerVidas} alt="Ver y obtener vidas" style={styles.stepImage1} />
            </li>
            <li>
              <span className="font-semibold">Recupera vidas de diferentes maneras.</span>
              <p className="text-gray-600">Puedes recuperar vidas de las siguientes maneras:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Comprando vidas con gemas.</li>
                <li>Comprando vidas ilimitadas.</li>
                <li>Practicando para ganar vidas.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default PerderYRecuperarVidas;