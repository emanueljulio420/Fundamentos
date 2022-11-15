import React from "react";
import { useState, useEffect } from "react";
import Reserva_Habitacion_CasaClub from "../Modelo/Reserva_Habitacion_CasaClub"


function DisponibilidadC() {

  const [userList, setUserList] = useState([]);

  const habitaciones = new Reserva_Habitacion_CasaClub("id","correo","telefono","nombre","Fecha_ingreso","Fecha_Salida");

  useEffect(() => {

   /* reserva.actualizar_reservas(setUserList)
     */
    habitaciones.habitaciones(setUserList)
      .catch(console.error);
  }, []);

  return (
    <div className="container my-5">
       <div className="container">
      <h1>Habitaciones casa club</h1>
      <div className="row-4 mt-4">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Numero</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={index}>
                  <th>{user.numero}</th>
                  <th>{user.Estado}</th>
                  <th>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default DisponibilidadC ;