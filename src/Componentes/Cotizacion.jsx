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
        <form className="row g-3 needs-validation">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
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
            <label htmlFor="inputPassword4" className="form-label">
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
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de montaje
            </label>
            <select id="montaje" className="form-select" required>
              <option>Seleccione montaje</option>
              <option value={1}>Auditorio</option>
              <option value={2}>Escuela</option>
              <option value={3}>Banquete / Coctel con pita</option>
              <option value={4}>Imperial</option>
              <option value={5}>Herradura</option>
              <option value={6}>Ruso</option>
              <option value={7}>Banquete sin pista</option>
              <option value={8}>Redonda</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputPassword4" className="form-label">
              Numero de personas
            </label>
            <input
              type="number"
              className="form-control"
              id="numPersonas"
              placeholder="Numero de personas"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de alimentacion
            </label>
            <select id="montaje" className="form-select" required>
            <option>Seleccione alimentacion</option>
              <option value={1}>Aperitivo o Coffee break</option>
              <option value={2}>Buffet, gran cantidad de platos</option>
              <option value={3}>Banquete / Coctel con pita</option>
              <option value={4}>Cóctel</option>
              <option value={5}>Recepción</option>
              <option value={6}>Brunch</option>
              <option value={7}>Box lunch</option>
            </select>
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
