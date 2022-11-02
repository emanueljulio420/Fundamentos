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
            <Link className="Links text-white text-decoration-none" to={'/loggin/inicioAdmin'}>
              Inicio
            </Link>
            <Link className="Links text-white text-decoration-none" to={'/loggin/inicioAdmin/eventos'}>
              Eventos casa club
            </Link>
            <Link className="Links text-white text-decoration-none" to={'/loggin/inicioAdmin/h_casa_club'}>
              Habitaciones casa club
            </Link>
            <Link className="Links text-white text-decoration-none" to={'/ViviendasVives'}>
              Viviendas Vives
            </Link>

            <Link className="Links text-white text-decoration-none" to={'/loggin'}>
              Log out
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
