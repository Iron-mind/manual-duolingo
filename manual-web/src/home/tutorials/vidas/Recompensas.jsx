import React from 'react';
import recompensaLeccion from '../../../assets/recompensas/recompensaLeccion.png';
import recompensaLeccionGema from '../../../assets/recompensas/recompensaLeccionGema.png';
import recompensasRachas from '../../../assets/rachas/recompensasRachas.png';

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

const Recompensas = () => {
  return (
    <div style={styles.manualSection}>
      <div style={styles.articleCard}>
        <h2>Recompensas</h2>
        <p>Las recompensas en Duolingo incluyen:</p>
        <ul>
          <li>
            <span className="font-semibold">Monedas adicionales por completar lecciones:</span>
            <p className="text-gray-600">Recibirás monedas adicionales cada vez que completes una lección.</p>
            <img src={recompensaLeccion} alt="Recompensa por lección" style={styles.stepImage} />
          </li>
          <li>
            <span className="font-semibold">Gemas adicionales por completar lecciones:</span>
            <p className="text-gray-600">Recibirás gemas adicionales cada vez que completes una lección.</p>
            <img src={recompensaLeccionGema} alt="Recompensa de gemas" style={styles.stepImage} />
          </li>
          <li>
            <span className="font-semibold">Bonificaciones de experiencia por mantener rachas:</span>
            <p className="text-gray-600">Mantener una racha diaria te otorga bonificaciones de experiencia, ayudándote a subir de nivel más rápido.</p>
            <img src={recompensasRachas} alt="Recompensas de rachas" style={styles.stepImage} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recompensas;