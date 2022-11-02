import React, { useState } from "react";
import axios from "axios";
import evento from "../Modelo/Evento";

var even = [];

axios
  .get("http://localhost:4000/eventos")
  .then((response) => {
    even = response.data;
    console.log(even);
  })
  .catch((e) => {
    console.log(e);
  });


function EliminarEvento() {
  const Evento = new evento();

    const [Id , setId] = useState('')

/*
  const [body, setbody] = useState({Id:""});


  const inputChange = ({ target }) => {
    const { name, value } = target;
    setbody({
      ...body,
      [name]: value,
    });
  }
*/

  const handleSubmit = (ev) => {
    ev.preventDefault();
      Evento.onDelete(Id);
    }


  const verificarEvento = (ev) => {
    ev.preventDefault();
    var verificacion = false;
    for (var i = 1; i <= even.length + 1; i++) {
      if (parseFloat(Id) === even[i]["Id"]) {
        alert('El evento existe')
      }
    }

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
              id="Id"
              name="Id"
              onChange={(ev) => setId(ev.target.value)}
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
        </form>
        <form className="row m-5 needs-validation" onSubmit={handleSubmit}>
          <button
            className="btn my-3 border-danger btn-outline-danger p-3"
            type="sumit"
          >
            Eliminar Evento
          </button>
          </form>
      </div>
    </main>
  );

}
export default EliminarEvento;
