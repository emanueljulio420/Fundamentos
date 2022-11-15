import React from "react";
import { Link } from "react-router-dom";

function Habitaciones_Casa_club() {
  return (
    <main className="container my-5">
      <div 
      className="d-grid gap-2">
      <Link to='/EventosCasaClub/CrearReservaHabitacionCasaClub'>
        <button 
        className="btn btn-danger my-3 py-4" type="button">
          Crear reserva
        </button>
        </Link>


        <Link to='/HabitacionCasaClub/CancelarReserva'>
        <button 
        className="btn btn-danger my-3 py-4" type="button">
          Cancelar reserva
        </button>
        </Link>

        <Link to='/HabitacionCasaClub/DisponibilidadC'>
        <button 
        className="btn btn-danger my-3 py-4" type="button">
          Consultar disponiblilidad
        </button>
        </Link>
      </div>
    </main>
  );
}

export default Habitaciones_Casa_club;
