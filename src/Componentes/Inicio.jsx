import React from "react";
import logo_c from "../Imagenes/logo_casa_club.png";
import logo_v from "../Imagenes/logo_Viviendas_vives.png";
import { Link } from "react-router-dom";

function Inicio() {

  //require('./Modelo/db.php')

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Seleccione servicio:</h1>
          </div>
        </div>
      </section>
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 g-2">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 bg-danger">
                  <h4 className="my-0 fw-normal text-center">Casa club</h4>
                </div>
                <div className="card-body">
                  <Link to="/casa_club">
                    <button type="button" className="w-100 btn btn-lg ">
                      <img src={logo_c} className="img-fluid" alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 bg-danger">
                  <h4 className="my-0 fw-normal text-center">Vivienda Vives</h4>
                </div>
                <div className="card-body">
                  <Link to="/vives">
                  <button type="button" className="w-100 btn btn-lg ">
                    <img src={logo_v} className="img-fluid" alt="" />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Inicio;
