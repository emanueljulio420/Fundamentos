import "../Estilos/Header.css";

import React from "react";
import uni from "../Imagenes/universidad.png";

function Header() {
  return (
    <nav>
      <div className="izquierda">
        <img src={uni} alt="" />
      </div>
      <div className="derecha">
        <button className="admin">Inicio admin</button>
      </div>
    </nav>
  );
}

export default Header;
