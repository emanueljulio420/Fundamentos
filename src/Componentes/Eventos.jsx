import React from "react";
import { Link } from "react-router-dom";


function Eventos() {
  return (
    <main className="container my-5">
      <div class="d-grid gap-1">
        <Link to='/loggin/inicioAdmin/eventos/crear'>
        <button class="btn btn-danger my-3 py-4" type="button">
          Crear evento
        </button>
        </Link>
        <Link>
        <button class="btn btn-danger my-3 py-4" type="button">
          Modificar evento
        </button>
        </Link>
      </div>
    </main>
  );
}

export default Eventos;
