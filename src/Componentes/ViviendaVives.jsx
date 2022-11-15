import React from "react";
import { Link } from "react-router-dom";

function ViviendaVives() {
  return (
    <main className="container my-5">
      <div className="d-grid gap-2">
      <Link to='/VivendasVives/CrearArrendamiento'>
        <button className="btn btn-danger my-3 py-4" type="button">
          Arrendar 
        </button>
        </Link>

        <Link to='/ViviendasVives/CancelarArrendamiento'>
        <button className="btn btn-danger my-3 py-4" type="button">
          Cancelar arriendo
        </button>
        </Link>
        <Link to='/VivendasVives/DisponibilidadV'>
        <button className="btn btn-danger my-3 py-4" type="button">
          Consultar disponiblilidad
        </button>
        </Link>

      </div>
    </main>
  );
}

export default ViviendaVives;