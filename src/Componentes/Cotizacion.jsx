import React from "react";

function Cotizacion() {

  return (
    <main>
      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Cotizacion</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Nombre del evento
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreE"
              placeholder="Nombre del evento"
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Nombre de la empresa o dependencia udem
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreD"
              placeholder="Nombre de la empresa o dependencia udem"
              required
            />
          </div>
          <div className="col-md-4">
            <label for="inputCity" className="form-label">
              Hora
            </label>
            <input type="time" className="form-control" id="hora" required />
          </div>
          <div className="col-md-4">
            <label for="inputZip" className="form-label">
              Fecha
            </label>
            <input type="date" className="form-control" id="fecha" required />
          </div>
          <div className="col-md-4">
            <label for="disabledSelect" className="form-label">
              Tipo de montaje
            </label>
            <select id="montaje" className="form-select" required>
              <option>Seleccione montaje</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Nombre de contacto
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreC"
              placeholder="Nombre de contacto"
              required
            />
          </div>
          <div className="col-md-4">
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
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Telefono
            </label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              placeholder="Telefono"
              required
            />
          </div>
          <div className="col-md-6">
            <label for="exampleFormControlTextarea1" className="form-label">
              Descirpcion de alimentacion
            </label>
            <textarea
              className="form-control"
              id="descripcionA"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="col-md-6">
            <label for="exampleFormControlTextarea1" className="form-label">
              Notas importantes
            </label>
            <textarea
              className="form-control"
              id="notas"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            className="btn my-3 border-danger btn-outline-dark p-3"
            type="sumit"
          >
            Cotizar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Cotizacion;
