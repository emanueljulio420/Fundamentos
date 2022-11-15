import React from "react";
import { useState } from "react";
import HabitacionesV from "../Modelo/Habitaciones_ViviendasVives"
import axios from "axios";

var cedulas = []

function CrearArrendamientoVives(){

  axios.get("http://localhost:4000/usuarios")
  .then((response) => {
    cedulas = response.data;
  })
  .catch((e) => {
    console.log(e);
  });

      
  const [nombre ,setNombre] = useState("");
  const [tipoD ,settipoD] = useState("");
  const [numeroD ,setnumeroD] = useState("");
  const [telefono ,settelefono] = useState("");
  const [correo ,setCorreo] = useState("");
  const [fechaI ,setFechaI] = useState("");
  const [habitacion ,setHabitacion] = useState("");
  const [nombreT ,setnombreT] = useState("");
  const [tipoDT ,settipoDT] = useState("");
  const [numeroDT ,setnumeroDT] = useState("");
  const [correoT ,setcorreoT] = useState("");
  const [telefonoT ,settelefonoT] = useState("");

    const handleSubmit = (ev) => {
      ev.preventDefault();
      const habitaciones = new HabitacionesV("id","nombre","TipoDeHabitacion","Fecha_ingreso","Fecha_Salida","cantidadPersonas");
      
      var verificacion  = verificar(parseInt(telefono),parseInt(numeroD))
      if (verificacion){
      habitaciones.nuevaReserva({
         NombreE:nombre, 
         tipo_d:tipoD, 
         numeroD:parseInt(numeroD), 
         telefono: parseInt(telefono), 
         correo:correo, 
         fechaI: fechaI, 
         numeroH: parseInt(habitacion), 
         nombreT: nombreT, 
         tipo_dT: tipoDT, 
         numeroDT: parseInt(numeroDT), 
         correoT: correoT, 
         telefonoT: parseInt(telefonoT)
      })
      }
    }

    return (
    <main>
        <section className="text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1>Arrendamiento habitación vives</h1>
            </div>
          </div>
          
        </section>
        
        <div className="container">
        <h6>Información del estudiante: </h6>
          <form className="row g-3 needs-validation" onSubmit={handleSubmit} validate>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreE"
                placeholder="Nombre del estudiante"
                onChange={(ev) => setNombre(ev.target.value)}
                required
              />
            </div>
            
            <div className="col-md-2">
              <label for="disabledSelect" className="form-label">
                Tipo de Documento
              </label>
              <select id="Docuemto" className="form-select" onChange={(ev) => settipoD(ev.target.value)} required>
                <option></option>
                <option value="T.I">T.I</option>
                <option value="C.C">C.C</option>
              </select>
            </div>

            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Número de documento
              </label>
              <input
                type="number"
                className="form-control"
                id="Documento"
                onChange={(ev) => setnumeroD(ev.target.value)}
                placeholder="Documento del estudiante"
                required
              />
            </div>

            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="form-control"
                id="telefono"
                onChange={(ev) => settelefono(ev.target.value)}
                placeholder="Teléfono del estudiante"
                required
              />
            </div>
            
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="correoEstudiante"
                onChange={(ev) => setCorreo(ev.target.value)}
                placeholder="Correo del estudiante"
                required
              />
            </div>

            <h6>Información de la habitación: </h6>

            <div className="col-md-4">
              <p><br/>Las dos primeras habitaciones de cada piso son tipo balcon<br/>las habitaciones que comienzan en 11 son tipo balcon<br/>El resto de las habitaciones son estandar</p>
            </div>
            <div className="col-md-4">
              <label for="inputZip" className="form-label">
                Fecha de ingreso
              </label>
              <input type="date" className="form-control" onChange={(ev) => setFechaI(ev.target.value)} id="fecha" required />
            </div>
            <div className="col-md-4">
                <label html="disabledSelect" className="form-label">
                  Habitación
                </label>
                <select id="montaje" className="form-select" onChange={(ev) => setHabitacion(ev.target.value)} required>
                  <option>Seleccione una habitacion</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={101}>101</option>
                  <option value={102}>102</option>
                  <option value={103}>103</option>
                  <option value={104}>104</option>
                  <option value={201}>201</option>
                  <option value={202}>202</option>
                  <option value={203}>203</option>
                  <option value={204}>204</option>
                  <option value={301}>301</option>
                  <option value={302}>302</option>
                  <option value={303}>303</option>
                  <option value={304}>304</option>
                  <option value={401}>401</option>
                  <option value={402}>402</option>
                  <option value={403}>403</option>
                  <option value={404}>404</option>
                  <option value={501}>501</option>
                  <option value={502}>502</option>
                  <option value={503}>503</option>
                  <option value={504}>504</option>
                  <option value={601}>601</option>
                  <option value={602}>602</option>
                  <option value={603}>603</option>
                  <option value={604}>604</option>
                  <option value={701}>701</option>
                  <option value={702}>702</option>
                  <option value={703}>703</option>
                  <option value={704}>704</option>
                  <option value={801}>801</option>
                  <option value={802}>802</option>
                  <option value={803}>803</option>
                  <option value={804}>804</option>
                  <option value={901}>901</option>
                  <option value={902}>902</option>
                  <option value={903}>903</option>
                  <option value={904}>904</option>
                  <option value={1001}>1001</option>
                  <option value={1002}>1002</option>
                  <option value={1003}>1003</option>
                  <option value={1004}>1004</option>
                  <option value={1101}>1101</option>
                  <option value={1102}>1102</option>
                  <option value={1103}>1103</option>
                  <option value={1104}>1104</option>
                  <option value={1105}>1105</option>
                  <option value={1106}>1106</option>
                  <option value={1107}>1107</option>
                  <option value={1108}>1108</option>
                  <option value={1109}>1109</option>
                  <option value={1110}>1110</option>
                  <option value={1111}>1111</option>

                </select>
              </div>

            <h6>Información del Tutor (Solo para menores de edad):</h6>

            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Tutor legal
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreTutor"
                onChange={(ev) => setnombreT(ev.target.value)}
                placeholder="Nombre del tutor"
                
              />
            </div>
            <div className="col-md-2">
              <label for="disabledSelect" className="form-label">
                Tipo de Documento
              </label>
              <select id="Docuemto" onChange={(ev) => settipoDT(ev.target.value)} className="form-select" >
                <option></option>
                <option value="C.C">C.C</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Número de documento
              </label>
              <input
                type="number"
                onChange={(ev) => setnumeroDT(ev.target.value)}
                className="form-control"
                id="DocumentoTutor"
                placeholder="Documento del tutor"
                
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="correoTutor"
                onChange={(ev) => setcorreoT(ev.target.value)}
                placeholder="Correo del tutor"
                
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="form-control"
                id="telefonoTutor"
                onChange={(ev) => settelefonoT(ev.target.value)}
                placeholder="Teléfono del tutor"
                
              />
            </div>
            
            
            <button
              className="btn my-3 btn-outline-danger p-3"
              type="sumit"
              onSubmit={handleSubmit}
            >
              Arrendar
            </button>
          </form>
        </div>
      </main>
      );
}

export default CrearArrendamientoVives;

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
