import React from 'react';
import inicioRacha from '../../../assets/rachas/inicioRacha.png';
import continuacionRachas from '../../../assets/rachas/continuacionrachas.png';
import calendarioRachas from '../../../assets/rachas/calendariorachas.png';
import protectoresRachas from '../../../assets/rachas/protectoresRachas.png';

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
    width: '100%',
    height: '600px',
    marginBottom: '20px',
    borderRadius: '8px',
  },
};

const ComoFuncionanRachas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo funcionan las rachas</h1>
        <p className="text-gray-600 text-lg">Para mantener una racha en Duolingo, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Completa al menos una lección cada día.</span>
              <p className="text-gray-600">Para mantener tu racha, asegúrate de completar al menos una lección diaria.</p>
              <img src={inicioRacha} alt="Paso 1" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Verifica tu progreso en la sección de rachas.</span>
              <p className="text-gray-600">Puedes verificar tu progreso y ver cuántos días consecutivos has mantenido tu racha en la sección de rachas.</p>
              <img src={continuacionRachas} alt="Paso 2" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Utiliza protectores de racha para no perder tu progreso.</span>
              <p className="text-gray-600">Si no puedes completar una lección en un día, utiliza un protector de racha para no perder tu progreso.</p>
              <img src={protectoresRachas} alt="Paso 3" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Sigue viendo tu racha en un calendario.</span>
              <p className="text-gray-600">Puedes seguir viendo tu racha en un calendario para mantener un seguimiento visual de tu progreso.</p>
              <img src={calendarioRachas} alt="Paso 4" style={styles.stepImage1} />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default ComoFuncionanRachas;