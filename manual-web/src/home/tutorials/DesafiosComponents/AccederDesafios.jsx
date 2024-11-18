import React from 'react';
import desafioMenu from '../../../assets/desafios/desafioMenu.png';
import desafioInicio from '../../../assets/desafios/desafioInicio.png';

const AccederDesafios = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo acceder a desafíos</h1>
        <p className="text-gray-600 text-lg">Para acceder a los desafíos, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Haz clic en el icono de desafíos en la barra de navegación.</span>
              <p className="text-gray-600">El icono de desafíos se encuentra en la parte izquierda de la pantalla, representado por un cofre.</p>
              <img src={desafioMenu} alt="Paso 1" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Serás redirigido a la página de desafíos donde podrás ver todos los desafíos disponibles.</span>
              <p className="text-gray-600">En esta página, podrás ver una lista de todos los desafíos actuales y sus respectivas recompensas.</p>
              <img src={desafioInicio} alt="Paso 2" className="w-full responsive-img mb-2" />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default AccederDesafios;