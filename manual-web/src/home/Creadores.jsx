import React from 'react';


function Creadores() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto'
  };

  const studentStyle = {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  const nameStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333'
  };

  const idStyle = {
    fontSize: '1rem',
    color: '#555'
  };

  return (
    <div style={containerStyle}>
      <h1> Creadores</h1>
      <p> Trabajo hecho para la Universidad del valle</p>
      <p> Diseño de Contenido para Interfaces de Usuario</p>
      <p> Paola Johanna Rodríguez Carrillo</p>
      <div style={studentStyle}>
        <p style={nameStyle}>Alejandro Chara Garcia</p>
        <p style={idStyle}>2010017</p>
      </div>
      <div style={studentStyle}>
        <p style={nameStyle}>Juan David Tovar</p>
        <p style={idStyle}>2029032</p>
      </div>
      <div style={studentStyle}>
        <p style={nameStyle}>Natalia Riaños Horta</p>
        <p style={idStyle}>2042568</p>
      </div>
      <div style={studentStyle}>
        <p style={nameStyle}>Marlon Andres Anacona</p>
        <p style={idStyle}>2023777</p>
      </div>
      <div style={studentStyle}>
        <p style={nameStyle}>Andres Felipe Aristizabal</p>
        <p style={idStyle}>2223596</p>
      </div>
    </div>
  );
}

export default Creadores;
