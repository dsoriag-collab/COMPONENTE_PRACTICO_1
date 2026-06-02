import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GamingSection from "./components/GamingSection";
import Contacto from "./components/Contacto";
import UnemiInfo from "./components/UnemiInfo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");
  const cambiarSeccion = (nombreSeccion) => {
    setSeccionActiva(nombreSeccion);
  };

  return (
    <>
      <Navbar alNavegar={cambiarSeccion} seccionActual={seccionActiva} />
      {seccionActiva === "inicio" && (
        <>
          <Hero />
          <GamingSection />
        </>
      )}
      {seccionActiva === "contacto" && <Contacto />}
      {seccionActiva === "unemi" && <UnemiInfo />}
      <Footer />
    </>
  );
}

export default App;