import { useState } from "react";

function GamingSection() {

  const [plataforma, setPlataforma] = useState("pc");

  const datos = {
    pc: {
      titulo: "PC Gaming",
      imagen: "/img/pc.png",
      descripcion:
        <p style={{
        textAlign: "justify",
        margin: "20px auto",
        maxWidth: "800 px",
        lineHeight: "1.6",
        padding: "0 30px"
      }}>
        Imagina una computadora normal, pero con más potencia y libertad. <br />
        <br />Lo bueno: Puedes jugar desde juegos indie muy baratos hasta grandes producciones con gráficos increíbles.
        Además, puedes usar teclado, mouse o mandos, y ajustar los gráficos a tu gusto. 
        Plataformas como Steam son como tiendas gigantes con ofertas todo el tiempo. <br />
        <br />Lo no tan bueno: A veces necesitas saber un poquito de configuración (actualizar drivers, ajustar opciones) 
        y las buenas PCs para juegos pueden ser caras. <br />
        <br />Para ti si: Te gusta personalizar, no te asusta aprender cositas técnicas y quieres acceso a casi cualquier juego existente.
      </p>
    },

    celular: {
      titulo: "Videojuegos Móviles",
      imagen: "/img/celular.png",
      descripcion:
        <p style={{
        textAlign: "justify",
        margin: "20px auto",
        maxWidth: "800 px",
        lineHeight: "1.6",
        padding: "0 30px"
        }}>
        Tu propio teléfono puede ser una consola portátil. <br />
        <br />Lo bueno: Siempre lo llevas contigo. Hay muchísimos juegos gratis (con anuncios o compras opcionales), desde puzzles hasta shooters o estrategia. Jugar mientras viajas o esperas en una fila es genial. <br />
        <br />Lo no tan bueno: La pantalla es pequeña, los controles táctiles no son tan precisos como un mando, y muchos juegos gratis intentan que pagues dentro (microtransacciones). <br />
        <br />Para ti si: Juegas de forma casual, en ratos libres, y no quieres comprar un aparato extra.
        </p>
    },

    consola: {
      titulo: "Consolas",
      imagen: "/img/consola.png",
      descripcion:
        <p style={{
        textAlign: "justify",
        margin: "20px auto",
        maxWidth: "800 px",
        lineHeight: "1.6",
        padding: "0 30px"
        }}>
        Son aparatos hechos exclusivamente para jugar. Solo los conectas a la tele, pones el juego (digital o en disco) y ya. <br />
        <br />Lo bueno: Son súper sencillas. No tienes que preocuparte por si el juego correrá o no. Además, muchos juegos exclusivos (como Mario, Zelda, God of War) solo están aquí. Jugar desde el sofá es su especialidad. <br />
        <br />Lo no tan bueno: Las consolas nuevas no son baratas, los juegos suelen costar más que en PC y, a diferencia de la PC, no puedes mejorar los componentes por tu cuenta. <br />
        <br />Para ti si: Quieres una experiencia "plug and play" (enchufar y jugar), sin complicaciones, y te atrae jugar en la sala con amigos o familia.
        </p>
    }
  };

  return (
    <section className="gaming-section">

      <div className="botones">

        <button onClick={() => setPlataforma("pc")}>
          PC
        </button>

        <button onClick={() => setPlataforma("celular")}>
          Celulares
        </button>

        <button onClick={() => setPlataforma("consola")}>
          Consolas
        </button>

      </div>

      <div className="contenido">

        <img
          src={datos[plataforma].imagen}
          alt={datos[plataforma].titulo}
        />

        <h2>{datos[plataforma].titulo}</h2>

        <p>{datos[plataforma].descripcion}</p>

      </div>

    </section>
  );
}

export default GamingSection;