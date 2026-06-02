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
        Este Landing Page está enfocado para darle al usuario el entendimiento de las respectivas
        plataformas en donde uno, como usuario, sea jugador con anterioridad o no, pueda saber
        las opciones disponibles.
        El presente Landing Page fue desarrollado como componente práctico para la asignatura de
        Técnicas de la programación, enseñada por el Ing. Rodrigo Josue Guevera Reyes.
      </p>
    </div>
  );
}

export default UnemiInfo;