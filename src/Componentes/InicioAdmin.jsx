import axios from "axios";
import React from "react";
import { useState } from "react";

var cedulas = []

axios.get("http://localhost:4000/usuarios")
.then((response) => {
  cedulas = response.data;
  console.log(cedulas);
})
.catch((e) => {
  console.log(e);
});

function InicioAdmin() {

  const [cedula, setCedula] = useState();


  const vefidicarUsuario = (ev) => {
    ev.preventDefault();
    var nada = false;
    for (var i = 0; i <= cedulas.length + 1; i++) {
      if (parseInt(cedula) === cedulas[i]["cedula"]){
        nada = true;
        var inputcedula = document.getElementById("cedula");
        inputcedula.value = cedulas[i]["cedula"]
        var inputnombre = document.getElementById("nombre");
        inputnombre.value = cedulas[i]["nombre"]
        var inputdireccion = document.getElementById("direccion");
        inputdireccion.value = cedulas[i]["direccion"]
        var inputtelefono = document.getElementById("telefono");
        inputtelefono.value = cedulas[i]["telefono"]
        break
      }
    }
    if (nada === true){
      alert("Usuario existe")
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
  <fieldset disabled>
    <legend>Usuario</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">Cedula</label>
      <input type="text" id="cedula" className="form-control"/>
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">Nombre</label>
      <input type="text" id="nombre" className="form-control"/>
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">Direccion</label>
      <input type="text" id="direccion" className="form-control"/>
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">Telefono</label>
      <input type="text" id="telefono" className="form-control"/>
    </div>
  </fieldset>
        </div>
        <div className="col">
          <form className="needs-validation" onSubmit={vefidicarUsuario}>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="floatingPassword"
                placeholder="Cedula"
                onChange={(ev) => setCedula(ev.target.value)}
                required
              />
              <label htmlFor="floatingPassword">Cedula</label>
            </div>
            <button className="w-100 btn btn-lg btn-danger" type="submit">
              Consultar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default InicioAdmin;

