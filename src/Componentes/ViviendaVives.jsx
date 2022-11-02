import React from "react";
import { Link } from "react-router-dom";

function ViviendaVives() {
  return (
    <main className="container my-5">
      <div class="d-grid gap-2">
      <Link to='/VivendasVives/CrearArrendamiento'>
        <button class="btn btn-danger my-3 py-4" type="button">
          Arrendar 
        </button>
        </Link>

        <Link to='/VivendasVives/ModificarArrendamiento'>
        <button class="btn btn-danger my-3 py-4" type="button">
          Modificar arriendo
        </button>
        </Link>
        <button class="btn btn-danger my-3 py-4" type="button">
          Consultar disponiblilidad
        </button>
      </div>
    </main>
  );
}

export default ViviendaVives;