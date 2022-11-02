import React from "react";
import { Link } from "react-router-dom";
import uni from "../Imagenes/universidad.png";

function HeaderAdmin() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <img className="mx-3" src={uni} alt="/"/>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="Links" to={'/loggin/inicioAdmin'}>
              Inicio
            </Link>
            <Link className="Links" to={'/loggin/inicioAdmin/eventos'}>
              Eventos casa club
            </Link>
            <Link className="Links" to={'/loggin/inicioAdmin/h_casa_club'}>
              Habitaciones casa club
            </Link>
            <Link className="Links" to={'/ViviendasVives'}>
              Viviendas Vives
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
