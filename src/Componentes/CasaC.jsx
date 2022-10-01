import React from "react";
import img1 from "../Imagenes/casa_c1.png";
import img2 from "../Imagenes/casa_c2.png";
import img3 from "../Imagenes/casa_c3.png";
import img4 from "../Imagenes/casa_c4.png";
import img5 from "../Imagenes/casa_c5.png";
import {Link} from "react-router-dom"

function CasaC() {
  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1>¡¡ VEN Y CELEBRA CON NOSOTROS !!</h1>
            <p> Encuentra el lugar perfecto para celebrar tu evento social, academico o empresarial </p>
          </div>
        </div>
      </section>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1}class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Pasada</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h2 className="mg-2"> Si desea, puede cotizar su evento con nosotros aquí: </h2>
            <Link to="/casa_club/cotizar">
            <button class="btn my-3 border-danger btn-outline-dark p-3">Cotizar evento</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CasaC;
