import React from "react";
import { useState, useEffect } from "react";
import HabitacionesV from "../Modelo/Habitaciones_ViviendasVives"


function DisponibilidadV() {

  const [userList, setUserList] = useState([]);

  const habitaciones = new HabitacionesV("id","nombre","TipoDeHabitacion","Fecha_ingreso","Fecha_Salida","cantidadPersonas");

  useEffect(() => {
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

export default DisponibilidadV ;