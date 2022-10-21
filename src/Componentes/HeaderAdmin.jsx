import React from "react";
import uni from "../Imagenes/universidad.png";

function Header() {
    return (
  
    
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger" aria-label="Tenth navbar example">
        <div className="navbar-brand d-flex align-items-center">
            <img src={uni} className="img-fluid" alt="" />
          </div>

        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul className="navbar-nav">
              
              <li className="nav-item">

              <button
              className="btn text-white  btn-outline-danger p-3"
              type="submit">
              Habitaciones Casa Club
            </button>

              </li>
              <li className="nav-item">

              <button
              className="btn text-white  btn-outline-danger p-3"
              type="submit">
              Eventos Casa Club
            </button>
            </li>

            <li className="nav-item">

              <button
              className="btn text-white  btn-outline-danger p-3"
              type="submit">
              Viviendas Vives
            </button>
            </li>
            <li className="nav-item">

            <button
            className="btn text-white  btn-outline-danger p-3"
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