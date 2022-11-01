import React, { useState } from "react";
import axios from "axios";
import evento from "../Modelo/Evento";

var cedulas = [];


axios
  .get("http://localhost:4000/usuarios")
  .then((response) => {
    cedulas = response.data;
    console.log(cedulas);
  })
  .catch((e) => {
    console.log(e);
  });


function CrearEvento() {

  const [body, setBody] = useState({
    IdSocio: "",
    NombreE: "",
    NombreD: "",
    NombreC: "",
    telefonoC: "",
    Fecha: "",
    Hora: "",
    Tipodemontaje: "",
    NumeroP: "",
    Alimentacion: "",
    Notas: "",
  });

  const Evento = new evento(body);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(body);
    Evento.nuevoEvento(body);
  };


  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  return (
    <main>
      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Nuevo Evento</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="NameE" className="form-label">
              Nombre del evento
            </label>
            <input
              type="text"
              className="form-control"
              name="NombreE"
              onChange={inputChange}
              value={body.NombreE}
              placeholder="Nombre del evento"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="NameD" className="form-label">
              Nombre de la empresa o dependencia udem
            </label>
            <input
              type="text"
              className="form-control"
              name="NombreD"
              value={body.NombreD}
              placeholder="Nombre de la empresa o dependencia udem"
              onChange={inputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="NameC" className="form-label">
              Nombre del contacto
            </label>
            <input
              type="text"
              className="form-control"
              name="NombreC"
              onChange={inputChange}
              value={body.NombreC}
              placeholder="Nombre del contacto"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="Cedula" className="form-label">
              Cedula
            </label>
            <input
              type="number"
              className="form-control"
              name="IdSocio"
              onChange={inputChange}
              value={body.IdSocio}
              placeholder="Telefono del contacto"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Telefono de contacto
            </label>
            <input
              type="number"
              className="form-control"
              name="telefonoC"
              onChange={inputChange}
              value={body.telefonoC}
              placeholder="Telefono del contacto"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="Hora" className="form-label">
              Hora
            </label>
            <input
              type="time"
              className="form-control"
              onChange={inputChange}
              value={body.Hora}
              name="Hora"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="Fecha" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              name="Fecha"
              onChange={inputChange}
              value={body.Fecha}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de montaje
            </label>
            <select
              className="form-select"
              onChange={inputChange}
              name="Tipodemontaje"
              value={body.Tipodemontaje}
              required
            >
              <option>Seleccione montaje</option>
              <option value={1}>Auditorio</option>
              <option value={2}>Escuela</option>
              <option value={3}>Banquete</option>
              <option value={4}>Imperial</option>
              <option value={5}>Herradura</option>
              <option value={6}>Ruso</option>
              <option value={7}>Banquete sin pista</option>
              <option value={8}>Redonda</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputPassword4" className="form-label">
              Numero de personas
            </label>
            <input
              type="number"
              className="form-control"
              name="NumeroP"
              placeholder="Numero de personas"
              onChange={inputChange}
              value={body.NumeroP}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de alimentacion
            </label>
            <select
              name="Alimentacion"
              className="form-select"
              onChange={inputChange}
              value={body.Alimentacion}
              required
            >
              <option>Seleccione alimentacion</option>
              <option value={1}>Aperitivo o Coffee break</option>
              <option value={2}>Buffet, gran cantidad de platos</option>
              <option value={3}>Banquete / Coctel con pita</option>
              <option value={4}>Cóctel</option>
              <option value={5}>Recepción</option>
              <option value={6}>Brunch</option>
              <option value={7}>Box lunch</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Notas importantes
            </label>
            <textarea
              className="form-control"
              name="Notas"
              rows="3"
              value={body.Notas}
              onChange={inputChange}
              required
            ></textarea>
          </div>
          <button
            className="btn my-3 border-danger btn-outline-danger p-3"
            type="sumit"
          >
            Comfirmar Evento
          </button>
        </form>
      </div>
    </main>
  );
}

export default CrearEvento;
