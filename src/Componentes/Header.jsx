import React from "react";
import uni from "../Imagenes/universidad.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar navbar-dark bg-danger shadow-sm align-items-center">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <img src={uni} className="img-fluid" alt="" />
        </div>
        <Link to ="/loggin">
          <button
            className="btn text-white  btn-outline-dark p-3"
            type="submit">
            Inicio admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
