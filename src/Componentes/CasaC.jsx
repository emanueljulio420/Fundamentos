import React from "react";

import {Link} from "react-router-dom"

import img1 from "../Imagenes/casa_c1.png";
import img2 from "../Imagenes/casa_c2.png";
import img3 from "../Imagenes/casa_c3.png";
import img4 from "../Imagenes/casa_c4.png";
import img5 from "../Imagenes/casa_c5.png";

function CasaC() {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">¡¡ Ven y Celebra con nosotros !!</h1>
            <p>Encuentra el lugar perfecto para celebrar tu evento social, academico o empresarial</p>
          </div>
        </div>
      </section>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img5} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h2 className="fw-light">Si desea, puede cotizar su evento con nosotros aquí:</h2>
            <Link to="/casa_club/cotizar">
            <button className="btn my-3 border-danger btn-outline-dark p-3">Cotizar evento</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CasaC;
