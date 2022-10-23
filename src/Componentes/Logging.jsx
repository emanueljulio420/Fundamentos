import React, { useState } from "react";
import img from "../Imagenes/logousuario.png";
import { useNavigate } from "react-router-dom"


function Logging() {

  const navegador = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    var verificacion = iniciar(usuario, contraseña);

    if (verificacion) {
      return navegador("/loggin/inicioAdmin");
    }

  };

  return (

    <nav className="modal modal-signin position-static d-block py-5 text-center" tabindex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow align-items-center">
          <div className="modal-header p-5 pb-4 border-bottom-0 ">
            <img src={img} className="img-fluid" alt="" width="100" height="100" />
          </div>
          <div className="modal-body p-5 pt-0">
            <form className="needs-validation" onSubmit={handleSubmit} novalidate>
              <div className="form-floating col-md-12 mb-3">
                <input type="text" className="form-control rounded-3" id="usuario" onChange={ev => setUsuario(ev.target.value)} placeholder="Usuario" required />
                <label for="floatingInput">Usuario</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="contraseña" onChange={ev => setContraseña(ev.target.value)} placeholder="Contraseña" required />
                <label for="floatingPassword">Contraseña</label>
              </div>
              <hr className="my-4" />
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-danger p-3" type="submit">Iniciar sesion</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

  )

}

const iniciar = (usuario, contraseña) => {
  if (usuario === "pepe" && contraseña === "123") {
    return  (true);
  }
  else {
    alert("login incorrecto");
    return (false);
  }
};

export default Logging;