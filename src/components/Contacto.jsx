import React from 'react';

function UnemiInfo() {
  return (
    <div className="seccion-informativa animate-fade-in">
      <h2>Universidad Estatal de Milagro</h2>
      <h3>Ingeniería de Software</h3>
      <p style={{
        textAlign: "justify",
        margin: "20px auto",
        maxWidth: "800 px",
        lineHeight: "1.6",
        padding: "0 30px"
      }}>
        Este componente práctico fue realizado por el estudiante: Dennis Ruben Soria Guaranga 
        del curso B1 de la carrera de Ingeniería en Software, de la facultad de Ciencias e
        Ingeniería (FACI)
      </p>
    </div>
  );
}

export default UnemiInfo;