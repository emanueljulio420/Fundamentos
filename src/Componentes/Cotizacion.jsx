import { Alert } from "bootstrap";
import React from "react";


function Cotizacion() {
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
          <div class="col-md-2 form-check">
          <label for="exampleFormControlTextarea1" class="form-label">
              Otros servicios:
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Second default radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label class="form-check-label" for="exampleRadios3">
                Disabled radio
              </label>
            </div>
          </div>
          <button
            class="btn my-3 border-danger btn-outline-dark p-3"
            type="sumit"
            onClick="enviarcorreo()"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

function enviarcorreo(){
    var nombreC = document.getElementById("nombreC")
    Alert(nombreC)
}

export default Cotizacion;
