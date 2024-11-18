import React from 'react';
import tienda from '../../../assets/tienda/tienda.png';
import tienda2 from '../../../assets/tienda/tienda2.png';

const AccederTienda = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo acceder a la tienda</h1>
        <p className="text-gray-600 text-lg">Para acceder a la tienda, sigue estos pasos detallados:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Haz clic en el icono de la tienda en la barra de navegación.</span>
              <p className="text-gray-600">El icono de la tienda se encuentra en la parte izquierda de la pantalla, representado por un símbolo de tienda.</p>
              <img src={tienda} alt="Paso 1" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Serás redirigido a la página de la tienda donde podrás comprar vidas ilimitadas.</span>
              <p className="text-gray-600">En esta página, podrás ver la opción para comprar vidas ilimitadas y otros ítems disponibles.</p>
              <img src={tienda2} alt="Paso 2" className="w-full responsive-img mb-2" />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default AccederTienda;