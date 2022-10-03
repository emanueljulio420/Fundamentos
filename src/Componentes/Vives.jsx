import React from "react";
// import { Link } from "react-router-dom"
import balcon from "../Imagenes/BALCON.jpg";
import estandar from "../Imagenes/Estandar.jpg";
import terraza from "../Imagenes/Terraza.jpg";


function Vives() {

    return (
        <div class="col-lg-8 mx-auto p-4 py-md-5">
            <main>
                <h1>¿Con qué espacios cuenta?</h1>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">A20 habitaciones con balcón, 11 con terraza y 24 estándar para un total de 55 habitaciones, con acomodación entre una o dos personas </li>
                    <li class="list-group-item">Lavandería autoservicio</li>
                    <li class="list-group-item">Zonas comunes tipo lunch</li>
                    <li class="list-group-item">Sala de coworking</li>
                    <li class="list-group-item">Terrazas Parqueaderos (costo adicional)</li>
                    <li class="list-group-item">Recepción</li>
                    <li class="list-group-item">Hall</li>
                </ul>
                <hr class="mb-5" />
                <div class="album py-5 ">
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-danger">
                                <div class="card-header py-3 text-bg-danger border-danger">
                                    <h4 class="my-0 fw-normal">Estandar</h4>
                                </div>
                                <div class="card-body">
                                    <img src={estandar} class="img-fluid my-2 border rounded" alt="" width="1000"/>
                                    <button type="button" class="w-100 btn btn-lg btn-danger">Más información</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-danger">
                                <div class="card-header py-3 text-bg-danger border-danger">
                                    <h4 class="my-0 fw-normal">Balcón</h4>
                                </div>
                                <div class="card-body">
                                    <img src={balcon} class="img-fluid my-2 border rounded" alt="" width="1000"/>
                                    <button type="button" class="w-100 btn btn-lg btn-danger">Más información</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-danger">
                                <div class="card-header py-3 text-bg-danger border-danger">
                                    <h4 class="my-0 fw-normal">Terraza</h4>
                                </div>
                                <div class="card-body">
                                    <img src={terraza} class="img-fluid my-2 border rounded" alt="" width="1000"/>
                                    <button type="button" class="w-100 btn btn-lg btn-danger">Más información</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}
export default Vives;