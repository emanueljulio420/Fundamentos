import React from "react";
import usuario from "../Imagenes/logousuario.png"

function Logging() {

    return (

<nav class="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog align-items-center" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0"> 
      <img src={usuario} alt="" width="100" height="100"/>
      </div>
      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Usuario" />
            <label for="floatingInput">Usuario</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Contraseña" />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <hr class="my-4"/>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</nav>

    )

}

export default Logging;