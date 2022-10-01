import React from "react";
import uni from "../Imagenes/universidad.png";

function Header() {
  return (
    <div class="navbar navbar-dark bg-danger shadow-sm align-items-center">
      <div class="container">
        <div class="navbar-brand d-flex align-items-center">
          <img src={uni} class="img-fluid" alt="" />
        </div>
        <button
          class="btn text-white  btn-outline-dark p-3"
          type="submit">
          Inicio admin
        </button>
      </div>
    </div>
  );
}

export default Header;
