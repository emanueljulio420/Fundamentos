import React from "react";
import uni from "../Imagenes/universidad.png";

function Header() {
    return (
  
    
        <nav class="navbar navbar-expand-lg navbar-danger bg-danger" aria-label="Tenth navbar example">
        <div class="navbar-brand d-flex align-items-center">
            <img src={uni} class="img-fluid" alt="" />
          </div>

        <div class="container-fluid ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul class="navbar-nav">
              
              <li class="nav-item">

              <button
              class="btn text-white  btn-outline-danger p-3"
              type="submit">
              Habitaciones Casa Club
            </button>

              </li>
              <li class="nav-item">

              <button
              class="btn text-white  btn-outline-danger p-3"
              type="submit">
              Eventos Casa Club
            </button>
            </li>

            <li class="nav-item">

              <button
              class="btn text-white  btn-outline-danger p-3"
              type="submit">
              Viviendas Vives
            </button>
            </li>
            <li class="nav-item">

            <button
            class="btn text-white  btn-outline-danger p-3"
            type="submit">
            Log out
            </button>
            </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
  


  
  export default Header;