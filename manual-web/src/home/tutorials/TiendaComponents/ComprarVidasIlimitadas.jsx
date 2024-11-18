import React from 'react';
import tienda from '../../../assets/tienda/tienda.png';
import tienda2 from '../../../assets/tienda/tienda2.png';
import planesTienda from '../../../assets/tienda/planesTienda.png';
import explicacionCompra from '../../../assets/tienda/explicacionCompra.png';
import planesfamiliar from '../../../assets/tienda/planesfamiliar.png';
import datosDePago from '../../../assets/tienda/datosDePago.png';

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

const ComprarVidasIlimitadas = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-green-500 mb-2">Cómo comprar vidas ilimitadas</h1>
        <p className="text-gray-600 text-lg">Para comprar vidas ilimitadas, sigue estos pasos:</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Accede a la tienda desde la barra de navegación.</span>
              <p className="text-gray-600">El icono de la tienda se encuentra en la parte izquierda de la pantalla, representado por un símbolo de tienda.</p>
              <img src={tienda} alt="Paso 1" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Serás redirigido a la página de la tienda donde podrás ver la opción para comprar vidas ilimitadas.</span>
              <p className="text-gray-600">En esta página, podrás ver la opción para comprar vidas ilimitadas y otros ítems disponibles.</p>
              <img src={tienda2} alt="Paso 2" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Selecciona el plan de vidas ilimitadas que prefieras.</span>
              <p className="text-gray-600">Puedes elegir entre diferentes planes según tus necesidades.</p>
              <img src={planesTienda} alt="Paso 3" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Lee la explicación de la compra y los beneficios del plan seleccionado.</span>
              <p className="text-gray-600">Asegúrate de entender los beneficios antes de proceder con la compra.</p>
              <img src={explicacionCompra} alt="Paso 4" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Si deseas, puedes optar por un plan familiar.</span>
              <p className="text-gray-600">El plan familiar permite compartir los beneficios con otros miembros de tu familia.</p>
              <img src={planesfamiliar} alt="Paso 5" className="w-full responsive-img mb-2" />
            </li>
            <li>
              <span className="font-semibold">Introduce tus datos de pago y confirma la compra.</span>
              <p className="text-gray-600">Asegúrate de que todos los datos sean correctos antes de confirmar la compra.</p>
              <img src={datosDePago} alt="Paso 6" className="w-full responsive-img mb-2" />
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default ComprarVidasIlimitadas;
    