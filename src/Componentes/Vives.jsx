import React from "react";
import balcon from "../Imagenes/BALCON.jpg";
import estandar from "../Imagenes/Estandar.jpg";
import teraza from "../Imagenes/terraza.jpeg";



function Vives() {

    return (
        <div className="col-lg-8 mx-auto p-4 py-md-5">
            <main>
                <h1>¿Con qué espacios cuenta?</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">A20 habitaciones con balcón, 11 con terraza y 24 estándar para un total de 55 habitaciones, con acomodación entre una o dos personas </li>
                    <li className="list-group-item">Lavandería autoservicio</li>
                    <li className="list-group-item">Zonas comunes tipo lunch</li>
                    <li className="list-group-item">Sala de coworking</li>
                    <li className="list-group-item">Terrazas Parqueaderos (costo adicional)</li>
                    <li className="list-group-item">Recepción</li>
                    <li className="list-group-item">Hall</li>
                </ul>
                <hr className="mb-5" />
                <div className="album py-5 ">
                    <div className="row row-cols-1 row-cols-md-3 mb-3">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-danger">
                                <div className="card-header py-3 text-bg-danger border-danger">
                                    <h4 className="my-0 fw-normal">Estandar</h4>
                                </div>
                                <div className="card-body">
                                    <img src={estandar} className="img-fluid my-2 border rounded" alt="" width="1000"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-danger">
                                <div className="card-header py-3 text-bg-danger border-danger">
                                    <h4 className="my-0 fw-normal">Balcón</h4>
                                </div>
                                <div className="card-body">
                                    <img src={balcon} className="img-fluid my-2 border rounded" alt="" width="1000"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-danger">
                                <div className="card-header py-3 text-bg-danger border-danger">
                                    <h4 className="my-0 fw-normal">Terraza</h4>
                                </div>
                                <div className="card-body">
                                <img src={teraza} className="img-fluid my-2 border rounded" alt="" width="1000"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Descripcion general</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">2 camas</li>
                    <li className="list-group-item">Closet</li>
                    <li className="list-group-item">Blackout</li>
                    <li className="list-group-item">Mueble de cocina: Microondas y nevera</li>
                    <li className="list-group-item">Zona de estudio: Escritorio, silla y tablero</li>
                    <li className="list-group-item">Conectividad: WIFI</li>
                    <li className="list-group-item">Servicio de limpieza semanal</li>
                </ul>
            </main>
        </div>
    );

}
export default Vives;