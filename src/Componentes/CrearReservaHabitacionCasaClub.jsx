import React from "react";

function CrearReservaHabitacionCasaClub(){
    
    return (
        <main>
          <section className="text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1>Reserva Habitacion Casa Club</h1>
              </div>
            </div>
          </section>
          <div className="container">
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreE"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Documento de identidad
                </label>
                <input
                  type='number'
                  className="form-control"
                  id="nombreD"
                  placeholder="Documento de identidad"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  placeholder="Correo"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Teléfono
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="telefono"
                  placeholder="Telefono"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="disabledSelect" className="form-label">
                  Habitación
                </label>
                <select id="montaje" className="form-select" required>
                  <option>Seleccione una habitacion</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={1}>6</option>
                  <option value={2}>7</option>
                  <option value={3}>8</option>
                  <option value={4}>9</option>
                  <option value={5}>10</option>
                  <option value={1}>11</option>
                  <option value={2}>12</option>
                  <option value={3}>13</option>
                  <option value={4}>14</option>
                  <option value={5}>15</option>
                  <option value={4}>16</option>
                  <option value={5}>17</option>

                </select>
              </div>
              <div className="col-md-4">
                <label for="inputZip" className="form-label">
                  Fecha de ingreso
                </label>
                <input type="date" className="form-control" id="fecha" required />
              </div>
              <div className="col-md-4">
                <label for="inputZip" className="form-label">
                  Fecha de salida
                </label>
                <input type="date" className="form-control" id="fecha" required />
              </div>
              <button
                className="btn my-3 border-danger btn-outline-dark p-3"
                type="sumit"
              >
                Reservar 
              </button>
            </form>
          </div>
        </main>
      );
}

export default CrearReservaHabitacionCasaClub;