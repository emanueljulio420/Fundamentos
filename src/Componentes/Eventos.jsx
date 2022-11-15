import React from "react";
import { Link } from "react-router-dom";


function Eventos() {
  return (
    <main className="container my-5">
      <div className="d-grid gap-1">
        <Link to='/loggin/inicioAdmin/eventos/crear'>
        <button className="btn btn-danger my-3 py-4" type="button">
          Crear evento
        </button>
        </Link>
        <Link to='/loggin/inicioAdmin/eventos/eliminar'>
        <button className="btn btn-danger my-3 py-4" type="button">
          Eliminar evento
        </button>
        </Link>
      </div>
    </main>
  );
}

export default Eventos;
