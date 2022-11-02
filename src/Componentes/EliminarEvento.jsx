import React, { useState } from "react";
import axios from "axios";
import evento from "../Modelo/Evento";
import { Alert } from "bootstrap";

var cedulas = [];

var even = [];

const numeritoEvento = 0;

axios
  .get("http://localhost:4000/eventos")
  .then((response) => {
    even = response.data;
    console.log(even);
  })
  .catch((e) => {
    console.log(e);
  });

axios
  .get("http://localhost:4000/usuarios")
  .then((response) => {
    cedulas = response.data;
  })
  .catch((e) => {
    console.log(e);
  });

function EliminarEvento() {
  const Evento = new evento();

  const [numeroE, setnumeroE] = useState("");


  const handleSubmit = (ev) => {
    ev.preventDefault();
      Evento.nuevoEvento({});
    }


  const verificarEvento = (ev) => {
    ev.preventDefault();
    for (var i = 1; i <= even.length + 1; i++) {
      if (parseFloat(numeroE) === even[i]["Id"]) {
        alert('Evento existe')
      }
    }
    alert("Evento no existe");
  }

  return (
    <main>
      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Modificar Evento</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <form className="row m-5 needs-validation" onSubmit={verificarEvento}>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Numero de evento
            </label>
            <input
              type="number"
              className="form-control"
              id="numEvento"
              onChange={(ev) => setnumeroE(ev.target.value)}
              value={even[numeritoEvento]["NumeroE"]}
              placeholder="Numero de evento"
              required
            />
          </div>
          <button
            className="btn my-3 col-md-6 border-danger btn-outline-danger p-3"
            type="sumit"
          >
            Buscar evento
          </button>
          <button
            className="btn my-3 border-danger btn-outline-danger p-3"
            onSubmit={handleSubmit}
            type="sumit"
          >
            Modificar Evento
          </button>
        </form>
      </div>
    </main>
  );
}

export default EliminarEvento;
