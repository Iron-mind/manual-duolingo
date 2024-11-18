import React from 'react';
import cuentos1 from '../../../assets/cuentos/cuentos1.webp';
import cuentos2 from '../../../assets/cuentos/cuentos2.webp';
import cuentos3 from '../../../assets/cuentos/cuentos3.webp';
import cuentos4 from '../../../assets/cuentos/cuentos4.webp';


import "../../../index.css";

const Cuentos = () => {
  return (
    <article className="bg-white w-100 mx-auto p-6 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-green-500">Tutorial: Cómo Usar las Historias de Duolingo</h1>
        <p className="text-gray-600 text-lg">Aprende a sacar el máximo provecho de las historias interactivas</p>
      </header>

      <section className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">1. Navegando la Pantalla Principal</h2>
          <div className="border rounded-lg overflow-hidden shadow-lg responsive-img">
            <img
              src={cuentos1}
              alt="Pantalla principal de Duolingo"
              className="w-full responsive-img"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">¿Qué puedes hacer aquí?</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Ganar EXP:</span> Pulsa el botón "EMPEZAR +20 EXP" para comenzar la historia y ganar puntos de experiencia
              </li>
              <li>
                <span className="font-semibold">Explorar la Biblioteca:</span> Navega entre diferentes historias como "El encuentro de Eddy" o "El viaje de Lin" para variar tu aprendizaje
              </li>
              <li>
                <span className="font-semibold">Revisar tu Progreso:</span> Observa tus corazones (vidas), nivel de EXP y progreso general en la parte superior
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">2. Interactuando con la Historia</h2>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={cuentos2}
              alt="Diálogo de la historia"
              className="w-full responsive-img"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Funciones Interactivas:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Escuchar Diálogos:</span> Toca el ícono de altavoz 🔊 para escuchar la pronunciación correcta
              </li>
              <li>
                <span className="font-semibold">Lectura Activa:</span> Lee los diálogos y familiarízate con nuevas expresiones y vocabulario
              </li>
              <li>
                <span className="font-semibold">Botón Continuar:</span> Usa "CONTINUAR" para avanzar cuando estés listo para el siguiente paso
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">3. Completando Ejercicios</h2>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={cuentos3}
              alt="Ejercicio de formación de oraciones"
              className="w-full responsive-img"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Tipos de Ejercicios:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Formar Oraciones:</span> Arrastra y ordena las palabras para construir oraciones correctas
              </li>
              <li>
                <span className="font-semibold">Preguntas de Comprensión:</span> Selecciona la respuesta correcta basada en el contexto de la historia
              </li>
              <li>
                <span className="font-semibold">Ejercicios de Escucha:</span> Escucha y repite las oraciones para mejorar tu pronunciación
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">4. Respondiendo Preguntas de Comprensión</h2>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={cuentos4}
              alt="Pregunta de comprensión"
              className="w-full responsive-img"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Cómo Responder:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Lee Cuidadosamente:</span> Analiza todas las opciones antes de seleccionar tu respuesta
              </li>
              <li>
                <span className="font-semibold">Retroalimentación Inmediata:</span> Recibirás feedback instantáneo sobre tu respuesta
              </li>
              <li>
                <span className="font-semibold">Aprender del Error:</span> Si te equivocas, perderás un corazón pero podrás intentarlo de nuevo
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Consejos Pro:</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-green-700">
            <li>Usa auriculares para una mejor experiencia de audio</li>
            <li>Intenta repetir las frases en voz alta para practicar tu pronunciación</li>
            <li>No te preocupes por cometer errores - son parte del proceso de aprendizaje</li>
            <li>Trata de completar al menos una historia al día para mantener tu racha</li>
          </ul>
        </div>
      </footer>
    </article>
  );
};

export default Cuentos;