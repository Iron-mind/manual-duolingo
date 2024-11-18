import React from 'react';
import menuRacha from '../../../assets/rachas/menuRachas.png';
import inicioRacha from '../../../assets/rachas/inicioRacha.png';


const AccederRachas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo acceder a las rachas</h1>
        <p className="text-gray-600 text-lg">Para acceder a las rachas, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Haz clic en el icono de rachas en la barra de navegación.</span>
              <p className="text-gray-600">El icono de rachas se encuentra en la parte superior derecha de la pantalla, representado por un símbolo de fuego.</p>
              <img src={menuRacha} alt="Paso 1" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Serás redirigido a la página de rachas donde podrás ver tu progreso.</span>
              <p className="text-gray-600">En esta página, podrás ver tu progreso de tu racha.</p>
              <img src={inicioRacha} alt="Paso 2" className="w-full responsive-img mb-2" />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default AccederRachas;