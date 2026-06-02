import { useState } from "react";

function Hero() {

  return (
    <p style={{
        textAlign: "justify",
        margin: "20px auto",
        maxWidth: "800 px",
        lineHeight: "1.6",
        padding: "0 30px"
      }}>
        ¡Bienvenidos a GamingHub! <hr /><br />
        Este apartado consiste en una breve introducción a las diferentes plataformas de videojuegos
        en donde se dividen en los diferentes dispositivos aptos para su ejecución de videojuegos con su
        respectivo catálogo accesible.
      </p>
  );
}

export default Hero;