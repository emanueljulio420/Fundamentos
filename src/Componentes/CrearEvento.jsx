import React, { useState } from "react";
import axios from 'axios'

var cedulas = []

axios.get('http://localhost:4000/usuarios').then(response => {
  cedulas = response.data
  console.log(cedulas)
})
.catch(e => {
  console.log(e);
})

function CrearEvento() {
  const [nombreEv, setnombreEv] = useState("");
  const [nombreEm, setnombreEm] = useState("");
  const [hora, sethora] = useState("");
  const [fecha, setfecha] = useState("");
  const [tipoMontaje, setTipoMontaje] = useState("");
  const [numeroP, setnumeroP] = useState("");
  const [nombreC, setnombreC] = useState("");
  const [telC, settelC] = useState("");
  const [tipoAlimentacion, setTipoAlimentacion] = useState("");
  const [descripcon, setdescripcon] = useState("");
  const [cedula, setCedula] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    var verificacion = verificar(fecha, parseFloat(telC),parseFloat(numeroP),parseFloat(cedula));
    if (verificacion){

    }
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
              id="nombreE"
              onChange={(ev) => setnombreEv(ev.target.value)}
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
              id="nombreD"
              placeholder="Nombre de la empresa o dependencia udem"
              onChange={(ev) => setnombreEm(ev.target.value)}
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
              id="nombreC"
              onChange={(ev) => setnombreC(ev.target.value)}
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
              id="cedula"
              onChange={(ev) => setCedula(ev.target.value)}
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
              id="telC"
              onChange={(ev) => settelC(ev.target.value)}
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
              onChange={(ev) => sethora(ev.target.value)}
              id="hora"
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
              id="fecha"
              onChange={(ev) => setfecha(ev.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de montaje
            </label>
            <select
              id="montaje"
              className="form-select"
              onChange={(ev) => setTipoMontaje(ev.target.value)}
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
              id="numPersonas"
              placeholder="Numero de personas"
              onChange={(ev) => setnumeroP(ev.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de alimentacion
            </label>
            <select
              id="montaje"
              className="form-select"
              onChange={(ev) => setTipoAlimentacion(ev.target.value)}
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
              id="notas"
              rows="3"
              onChange={(ev) => setdescripcon(ev.target.value)}
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

const verificar = (fecha, telC, numeroP,cedula) => {

    if ( telC < 1000000000){
        alert('Telefono incorrecto')
        return false
    }
    if (numeroP  < 10){
        alert('No cumple el numero de personas minimas')
        return false
    }
    var cedula_correcta = false
    for (var i = 0; i < cedulas.length; i++) {
        if (cedula === cedulas[i]['cedula']){
            cedula_correcta = true
        }
    } 
    if (!cedula_correcta){
        alert('No existe usuario con esa cedula')
        return false
    }
    return true
}