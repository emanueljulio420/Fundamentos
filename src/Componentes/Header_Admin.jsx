import React from "react";
import uni from "../Imagenes/universidad.png";



function HeaderAdmin() {
  return ( 
  <nav className="navbar navbar-expand-lg bg-danger shadow-sm  ">
  <div className="container-fluid">
  <img src={uni} className="img-fluid" alt="" />
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse  justify-content-around py-lg-5" id="navbarNavAltMarkup">
      <div className="navbar-nav  ">
        
        <button className="text-white   mb-3 bg-danger " href="#">Habitaciones Casa club</button>
        <button className="text-white   mb-3 bg-danger"  href="#">Eventos Casa Club</button>
        
       
      </div>
    </div>
  </div>
</nav>
  );
}

export default HeaderAdmin;
