import React from "react";
import logo_c from "../Imagenes/logo_casa_club.png";
import logo_v from "../Imagenes/logo_Viviendas_vives.png";
import { Link } from "react-router-dom";


function Inicio() {
  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Seleccione servicio:</h1>
          </div>
        </div>
      </section>
      <div class="album py-5 ">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 g-2">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 bg-danger">
                  <h4 class="my-0 fw-normal text-center">Casa club</h4>
                </div>
                <div class="card-body">
                  <Link to="/casa_club">
                    <button type="button" class="w-100 btn btn-lg ">
                      <img src={logo_c} class="img-fluid" alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 bg-danger">
                  <h4 class="my-0 fw-normal text-center">Casa club</h4>
                </div>
                <div class="card-body">
                  <button type="button" class="w-100 btn btn-lg ">
                    <img src={logo_v} class="img-fluid" alt="" />
                  </button>
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
