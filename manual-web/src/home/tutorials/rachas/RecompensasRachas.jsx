import React from 'react';
import recompensasRachas from '../../../assets/rachas/recompensasRachas.png';
import recompensaLeccion from '../../../assets/recompensas/recompensaLeccion.png';
import recompensaLeccionGema from '../../../assets/rachas/experenciaRacha.png';

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

const RecompensasRachas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Recompensas de rachas</h1>
        <p className="text-gray-600 text-lg">Las recompensas de rachas en Duolingo te motivan a mantener tu racha diaria. Aquí te explicamos cómo funcionan:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-gray-700">

              <span className="font-semibold">Trofeos y recompensas por días de racha:</span>
              <p className="text-gray-600">Al alcanzar ciertos hitos de racha, recibirás recompensas que se mostrarán en tu perfil.</p>
          </ul>
          <img src={recompensasRachas} alt="Recompensas de rachas" className="w-full responsive-img mb-2" />
        </div>
      </section>
    </article>
  );
};

export default RecompensasRachas;