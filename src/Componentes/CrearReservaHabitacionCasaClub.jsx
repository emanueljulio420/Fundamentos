import React from "react";
import { useState } from "react";
import axios from "axios";
import Reserva_Habitacion_CasaClub from "../Modelo/Reserva_Habitacion_CasaClub"

var cedulas = []

function CrearReservaHabitacionCasaClub(){

  axios.get("http://localhost:4000/usuarios")
  .then((response) => {
    cedulas = response.data;
  })
  .catch((e) => {
    console.log(e);
  });

  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState();
  const [correo ,setCorreo] = useState("");
  const [telefono, setTelefono] = useState();
  const [habitacion, setHabitacion] = useState();
  const [fechaI, setFechaI] = useState("");
  const [fechaF, setFechaF] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    var verificacion  = verificar(parseInt(telefono),parseInt(cedula))
    if (verificacion){
      const ReservaH = new Reserva_Habitacion_CasaClub("id","correo","telefono","nombre","Fecha_ingreso","Fecha_Salida");
      ReservaH.nuevaReserva(
        {
        IdSocio: parseInt(cedula), 
        nombre: nombre, 
        habitacion: parseInt(habitacion), 
        correo: correo, 
        telefono: parseInt(telefono), 
        fechaI: fechaI, 
        fechaF: fechaF
      }
      )
    }
  }
    
    return (
        <main>
          <section className="text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1>Reserva Habitación Casa Club</h1>
              </div>
            </div>
          </section>
          <div className="container">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit} validate>
              <div className="col-md-6">
                <label html="inputEmail4" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(ev) => setNombre(ev.target.value)}
                  id="nombre"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="col-md-6">
                <label html="inputPassword4" className="form-label">
                  Documento de identidad
                </label>
                <input
                  type='number'
                  className="form-control"
                  id="cedula"
                  onChange={(ev) => setCedula(ev.target.value)}
                  placeholder="Documento de identidad"
                  required
                />
              </div>
              <div className="col-md-6">
                <label html="inputPassword4" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  onChange={(ev) => setCorreo(ev.target.value)}
                  placeholder="Correo"
                  required
                />
              </div>
              <div className="col-md-6">
                <label html="inputPassword4" className="form-label">
                  Teléfono
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="telefono"
                  onChange={(ev) => setTelefono(ev.target.value)}
                  placeholder="Telefono"
                  required
                />
              </div>
              <div className="col-md-4">
                <label html="disabledSelect" className="form-label">
                  Habitación
                </label>
                <select id="montaje" className="form-select" onChange={(ev) => setHabitacion(ev.target.value)} required>
                  <option>Seleccione una habitacion</option>
                  <option value={101}>101</option>
                  <option value={102}>102</option>
                  <option value={103}>103</option>
                  <option value={104}>104</option>
                  <option value={105}>105</option>
                  <option value={106}>106</option>
                  <option value={107}>107</option>
                  <option value={108}>108</option>
                  <option value={109}>109</option>
                  <option value={110}>110</option>
                  <option value={111}>111</option>
                  <option value={112}>112</option>
                  <option value={113}>113</option>
                  <option value={114}>114</option>
                  <option value={115}>115</option>
                  <option value={116}>116</option>
                  <option value={117}>117</option>

                </select>
              </div>
              <div className="col-md-4">
                <label html="inputZip" className="form-label">
                  Fecha de ingreso
                </label>
                <input type="date" className="form-control" id="fecha" onChange={(ev) => setFechaI(ev.target.value)} required />
              </div>
              <div className="col-md-4">
                <label html="inputZip" className="form-label">
                  Fecha de salida
                </label>
                <input type="date" className="form-control" id="fecha" onChange={(ev) => setFechaF(ev.target.value)} required />
              </div>
              <button
                className="btn my-3 border-danger btn-outline-dark p-3"
                type="sumit"
              >
                Reservar 
              </button>
            </form>
          </div>
        </main>
      );
}

export default CrearReservaHabitacionCasaClub;

const verificar = (tel, cedula) => {
  if (!(tel > parseInt(1000000000) || tel < parseInt(10000000000))) {
    alert("Telefono incorrecto");
    return false;
  }
  var cedula_correcta = false;
  for (var i = 0; i < cedulas.length; i++) {
    if (cedula === cedulas[i]["cedula"]) {
      cedula_correcta = true;
      break
    }
  }
  if (!cedula_correcta) {
    alert("No existe usuario con esa cedula");
    return false;
  }
  return true;
};
