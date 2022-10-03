import React from "react";
import usuario from "../Imagenes/logousuario.png"

function Logging() {

  return (

    <nav class="modal modal-signin position-static d-block py-5 text-center" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow align-items-center">
          <div class="modal-header p-5 pb-4 border-bottom-0 ">
            <img src={usuario} class="img-fluid" alt="" width="100" height="100" />
          </div>
          <div class="modal-body p-5 pt-0">
            <form class="needs-validation" novalidate>
              <div class="form-floating col-md-12 mb-3">
                <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Usuario" required />
                <label for="floatingInput">Usuario</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Contraseña" required />
                <label for="floatingPassword">Contraseña</label>
              </div>
              <hr class="my-4" />
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-danger p-3" type="submit">Iniciar seccion</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

  )

}

export default Logging;