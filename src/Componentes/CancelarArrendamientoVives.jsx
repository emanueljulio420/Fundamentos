import axios  from "axios";
import React, { useState } from "react";
import HabitacionesV from "../Modelo/Habitaciones_ViviendasVives"

var reservas = []

function CancelarArrendamientoVives(){

  axios.get("http://localhost:4000/reservasHabitacionesV")
  .then((response) => {
    reservas =  response.data;
  })
  .catch((e) => {
    console.log(e);
  });

  const [Id , setId] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const habitaciones = new HabitacionesV("id","nombre","TipoDeHabitacion","Fecha_ingreso","Fecha_Salida","cantidadPersonas");
      habitaciones.eliminarReserva(Id)
    }

  const verificacionReserva = (ev) => {
    ev.preventDefault();
    for (var i = 0; i <= reservas.length + 1; i++) {
      if (parseFloat(Id) === reservas[i]["numero"]) {
        alert('El evento existe')
      }
    }
  }

    return (
      <main>
      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Cancelar reserva habitacion</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <form className="row m-5 needs-validation" onSubmit={verificacionReserva}>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Numero de reserva
            </label>
            <input
              type="number"
              className="form-control"
              id="Id"
              name="Id"
              onChange={(ev) => setId(ev.target.value)}
              placeholder="Numero de reserva"
              required
            />
          </div>
          <button
            className="btn my-3 col-md-6 border-danger btn-outline-danger p-3"
            type="sumit"
          >
            Buscar reserva
          </button>
        </form>
        <form className="row m-5 needs-validation" onSubmit={handleSubmit}>
          <button
            className="btn my-3 border-danger btn-outline-danger p-3"
            type="sumit"
          >
            Cancelar reserva
          </button>
          </form>
      </div>
    </main>
      );
}

export default CancelarArrendamientoVives;