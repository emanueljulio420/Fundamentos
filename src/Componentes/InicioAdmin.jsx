import React from "react";
import { useState } from "react";
import axios from "axios";

var cedulas = [];

axios.get("http://localhost:4000/usuarios")
  .then((response) => {
    cedulas = response.data;
    console.log(cedulas);
  })
  .catch((e) => {
    console.log(e);
  });


function InicioAdmin() {

    const [cedula, setCedula] = useState('')



    const handleSubmit = (ev) => {
        ev.preventDefault();
        var verificacion = buscarUsuario(parseFloat(cedula));
        if (verificacion){
          alert('Usuaro existe')
        }
        else{
          alert('Usuario no existente')
        }
      };

  return (
    <div class="container text-center my-5">
      <div class="row">
        <div class="col">1 of 2</div>
        <div class="col">
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div class="form-floating mb-2">
              <input
                type="number"
                class="form-control"
                id="floatingPassword"
                placeholder="Cedula"
                onChange={ev => setCedula(ev.target.value)}
                required
              />
              <label for="floatingPassword">Cedula</label>
            </div>
            <button class="w-100 btn btn-lg btn-danger" type="submit">
              Consultar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const buscarUsuario = (cedula) =>{
  for (var i = 1; i <= cedulas.length + 1; i++) {
    if (cedula === cedulas[i]['cedula']){
      return true
    }
  }
}

export default InicioAdmin;
