import React from "react";

function Cotizacion() {
  function enviarcorreo() {
    var nombreC = document.getElementById("nombreC").value;
    var nombreE = document.getElementById("nombreE").value;
    var nombreD = document.getElementById("nombreD").value;
    var hora = document.getElementById("hora").value;
    var fecha = document.getElementById("fecha").value;
    var tipoMontaje = document.getElementById("montaje").value;
    var correo = document.getElementById("correo").value;

  }

  return (
    <main>
      <section class="text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1>Cotizacion</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Nombre del evento
            </label>
            <input
              type="text"
              class="form-control"
              id="nombreE"
              placeholder="Nombre del evento"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Nombre de la empresa o dependencia udem
            </label>
            <input
              type="text"
              class="form-control"
              id="nombreD"
              placeholder="Nombre de la empresa o dependencia udem"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputCity" class="form-label">
              Hora
            </label>
            <input type="time" class="form-control" id="hora" required />
          </div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              Fecha
            </label>
            <input type="date" class="form-control" id="fecha" required />
          </div>
          <div class="col-md-4">
            <label for="disabledSelect" class="form-label">
              Tipo de montaje
            </label>
            <select id="montaje" class="form-select" required>
              <option>Seleccione montaje</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Nombre de contacto
            </label>
            <input
              type="text"
              class="form-control"
              id="nombreC"
              placeholder="Nombre de contacto"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Correo
            </label>
            <input
              type="email"
              class="form-control"
              id="correo"
              placeholder="Correo"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Telefono
            </label>
            <input
              type="number"
              class="form-control"
              id="telefono"
              placeholder="Telefono"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlTextarea1" class="form-label">
              Descirpcion de alimentacion
            </label>
            <textarea
              class="form-control"
              id="descripcionA"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlTextarea1" class="form-label">
              Notas importantes
            </label>
            <textarea
              class="form-control"
              id="notas"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            class="btn my-3 border-danger btn-outline-dark p-3"
            type="sumit"
            onClick={enviarcorreo}
          >
            Cotizar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Cotizacion;
