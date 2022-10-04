import React from "react";
import uni from "../Imagenes/universidad.png";



function HeaderAdmin() {
  return ( 
  <nav class="navbar navbar-expand-lg bg-danger shadow-sm  ">
  <div class="container-fluid">
  <img src={uni} class="img-fluid" alt="" />
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse  justify-content-around py-lg-5" id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
        
        <button class="text-white   mb-3 bg-danger " href="#">Habitaciones Casa club</button>
        <button class="text-white   mb-3 bg-danger"  href="#">Eventos Casa Club</button>
        
       
      </div>
    </div>
  </div>
</nav>
  );
}

export default HeaderAdmin;
