import React from 'react';
import abc from '../../../assets/introduccion/abc.jpeg';
import exam from '../../../assets/introduccion/exam.jpeg';
import forSchool from '../../../assets/introduccion/forSchool.jpeg';

import "../../../index.css";

const Introduccion = () => {
    return (
        <article className="bg-white w-100 mx-auto p-6 space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-green-500 mb-2">¡Bienvenido al manual de Duolingo!</h1>
                <p className="text-gray-600 text-lg">En esta sección descubrirás qué es Duolingo y todas las increíbles funcionalidades que te ofrece para empezar a aprender un nuevo idioma. ¡Vamos a empezar!</p>
                <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/about/approach/da355d86b723c4dd9e868b5d7618cf23.svg"
                    alt="Pantalla principal de Duolingo"
                    className="w-full responsive-img mb-2"/>
            </header>

            <section className="space-y-12">
                
                <div className="space-y-4">
                    <div style={{ display: "flex", alignItems: "start", gap: "16px" }}>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800">¿Qué es Duolingo?</h2>
                            <p className="text-gray-700">
                                Duolingo es una plataforma gratuita y divertida para aprender idiomas. Con lecciones cortas y ejercicios interactivos, puedes estudiar más de 30 idiomas, desde inglés y español hasta idiomas menos comunes como gaélico escocés o esperanto.
                            </p>
                        </div>
                        <img
                            src="https://press.duolingo.com/fddb08e1b8f271aedfc8.svg"
                            alt="Duolingo Logo"
                            style={{ width: "200px", height: "auto" }}
                        />
                    </div>
                    <div className="space-y-4">

                        <h3 className="text-xl font-semibold text-gray-700">¿Qué puedes hacer en Duolingo?</h3>
                        <ul className="list-disc pl-6 space-y-3 text-gray-700">
                            <li>
                                <span className="font-semibold">Aprender a tu ritmo:</span> Estudia lecciones interactivas adaptadas a tu nivel, desde principiantes hasta avanzados.
                            </li>
                            <li>
                                <span className="font-semibold">Ganar puntos de experiencia (EXP):</span> Completa ejercicios y gana EXP para avanzar en tu aprendizaje y mantener tu racha.
                            </li>
                            <li>
                                <span className="font-semibold">Diversión y motivación:</span> Disfruta de ejercicios interactivos y de historias que te ayudarán a aprender mientras te diviertes.
                            </li>
                        </ul>
                    </div>
                </div>

        
        {/* Nueva sección de Otros Servicios de Duolingo */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Otros Servicios de Duolingo</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Duolingo English Test</h3>
            <p className="text-gray-700">
            Es una forma innovadora y accesible de certificar tu nivel de inglés. Con una duración de solo una hora, puedes realizarlo desde la comodidad de tu hogar y obtener resultados rápidos y precisos. Este examen es reconocido por universidades y empleadores de todo el mundo, y su diseño interactivo evalúa tus habilidades de lectura, escritura, escucha y expresión oral. Ideal para quienes buscan una opción flexible, económica y confiable para demostrar su dominio del idioma
            </p>
            <a href="https://englishtest.duolingo.com" className="text-green-600 font-semibold">Certifica tu inglés aquí</a>
        
            <div className="border rounded-lg overflow-hidden shadow-lg responsive-img">
            <img
              src={exam}
              alt="Pantalla principal de Duolingo"
              className="w-full responsive-img"
            />
          </div>
            
              </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Duolingo for Schools</h3>
            <p className="text-gray-700">
              
            Ofrece a los maestros una plataforma gratuita y sencilla para apoyar a sus estudiantes en el aprendizaje de idiomas. Los docentes pueden asignar tareas, seguir el progreso de cada estudiante y personalizar las lecciones según sus necesidades. Todo se realiza de manera interactiva, con ejercicios dinámicos que mantienen a los alumnos motivados, ya sea dentro del aula o en casa. Es una herramienta ideal para complementar las clases y hacer el aprendizaje más divertido y efectivo.
            </p>
            <a href="https://schools.duolingo.com" className="text-green-600 font-semibold">Potencia tu salón de clases aquí</a>
    
            <div className="border rounded-lg overflow-hidden shadow-lg responsive-img">
            <img
              src={forSchool}
              alt="Pantalla principal de Duolingo"
              className="w-full responsive-img"
            />
          </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Duolingo ABC</h3>
            <p className="text-gray-700">
            Duolingo ABC está diseñado para enseñar a leer y escribir a niños de entre 3 y 8 años. Utiliza lecciones cortas y juegos interactivos que introducen fonética, palabras básicas y comprensión lectora de forma progresiva. Además, incluye cuentos atractivos y actividades que fomentan el amor por la lectura desde una edad temprana. Es completamente gratuito, fácil de usar y pensado para que los más pequeños aprendan mientras se divierten.
            </p>
            <a href="https://www.duolingo.com/abc" className="text-green-600 font-semibold">Conoce Duolingo ABC aquí</a>
            <div className="border rounded-lg overflow-hidden shadow-lg responsive-img">
            <img
              src={abc}
              alt="Pantalla principal de Duolingo"
              className="w-full responsive-img"
            />
          </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Duolingo Math</h3>
            <p className="text-gray-700">
            Combina la diversión y la interacción para enseñar matemáticas de manera práctica. Con lecciones cortas y personalizadas, los estudiantes pueden aprender conceptos básicos como sumas, restas y fracciones, mientras que los adultos pueden mejorar su agilidad mental con ejercicios avanzados. La app es ideal para quienes desean practicar a su propio ritmo y convertir el aprendizaje de matemáticas en una experiencia entretenida y accesible.
            </p>
            <a href="https://www.duolingo.com/math" className="text-green-600 font-semibold">Mejora en matemáticas aquí</a>
          </div>
        </div>
        
      </section>

      <footer className="mt-8 pt-6 border-t border-gray-200">
  <div className="bg-green-50 p-4 rounded-lg text-center shadow-lg">
    <h3 className="font-bold text-green-800 text-lg">¿Quieres saber más sobre Duolingo?</h3>
    <p className="text-gray-700 mt-2">
      Explora la página principal de Duolingo o visita la sección de inicio para descubrir más sobre cómo empezar tu aprendizaje.
    </p>
    <a
      href="https://www.duolingo.com/"
      className="text-green-600 font-semibold mt-4 inline-block hover:underline"
    >
      Ir a la página principal de Duolingo
    </a>
  </div>
</footer>

    </article>
  );
};

export default Introduccion;
