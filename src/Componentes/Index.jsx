import "../Estilos/Index.css";

import React from "react";
import logo_c from "../Imagenes/logo_casa_club.png";

function Index() {
  return (
    <main>
      <div className="titulo">
        <h1>Seleccione servicio:</h1>
      </div>
      <div className="menu">
        <div className="casa">
          <a href="">
            <img className="lugares" src={logo_c} alt=""></img>
            <br></br>
            <h2>Casa club</h2>
          </a>
        </div>
        <div className="vivienda">
          <a href="">
            <img className="lugares" src={logo_c} alt=""></img>
            <br></br>
            <h2>Vivienda vives</h2>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Index;
