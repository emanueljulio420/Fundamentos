import React from "react";
import { Link } from "react-router-dom";

function Habitaciones_Casa_club() {
  return (
    <main className="container my-5">
      <div class="d-grid gap-2">
      <Link to='/EventosCasaClub/CrearReservaHabitacionCasaClub'>
        <button class="btn btn-danger my-3 py-4" type="button">
          Crear reserva
        </button>
        </Link>

        <Link to='/HabitacionCasaClub/ModificarReserva'>
        <button class="btn btn-danger my-3 py-4" type="button">
          Modificar reserva
        </button>
        </Link>

        <Link to='/HabitacionCasaClub/CancelarReserva'>
        <button class="btn btn-danger my-3 py-4" type="button">
          Cancelar reserva
        </button>
        </Link>


        <button class="btn btn-danger my-3 py-4" type="button">
          Consultar disponiblilidad
        </button>
      </div>
    </main>
  );
}

export default Habitaciones_Casa_club;
