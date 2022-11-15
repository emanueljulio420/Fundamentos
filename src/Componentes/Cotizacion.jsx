import React, { useState } from "react";

function Cotizacion() {
  const [nombreEv, setnombreEv] = useState("");
  const [nombreEm, setnombreEm] = useState("");
  const [tipoMontaje, setTipoMontaje] = useState("");
  const [numeroP, setnumeroP] = useState("");
  const [tipoAlimentacion, setTipoAlimentacion] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (tipoMontaje === ""){
      alert("Seleccione tipo de montaje")
    }
    if (tipoAlimentacion === ""){
      alert("Seleccione tipo de alimentacion")
    }
    else{
      darPrecio(parseFloat(tipoAlimentacion),parseFloat(tipoMontaje),parseFloat(numeroP),nombreEm,nombreEv);
    }
  };

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
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Nombre del evento
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreE"
              onChange={(ev) => setnombreEv(ev.target.value)}
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
              onChange={(ev) => setnombreEm(ev.target.value)}
              placeholder="Nombre de la empresa o dependencia udem"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de montaje
            </label>
            <select
              id="montaje"
              className="form-select"
              onChange={(ev) => setTipoMontaje(ev.target.value)}
              required
            >
              <option>Seleccione montaje</option>
              <option value={1}>Auditorio</option>
              <option value={2}>Escuela</option>
              <option value={3}>Banquete</option>
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
              onChange={(ev) => setnumeroP(ev.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="disabledSelect" className="form-label">
              Tipo de alimentacion
            </label>
            <select
              id="alimentacion"
              className="form-select"
              onChange={(ev) => setTipoAlimentacion(ev.target.value)}
              required
            >
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


const darPrecio = (alimentacion,montaje,numeroP,nombreEm,nombreEv) => {
    var valorComida = 0
    var valorMontaje = 0
    var precioTotal = 0
    var Tipodemontaje
    var Tipoalimentacion
    if(alimentacion === 1){
      valorComida = 5000
      Tipoalimentacion = "Aperitivo o Coffee break"
    }
    if(alimentacion === 2){
      valorComida = 10000
      Tipoalimentacion = "Buffet, gran cantidad de platos"
    }
    if(alimentacion === 3){
      valorComida = 15000
      Tipoalimentacion = "Banquete / Coctel con pita"
    }
    if(alimentacion === 4){
      valorComida = 6000
      Tipoalimentacion = "Cóctel"
    }
    if(alimentacion === 5){
      valorComida = 8000
      Tipoalimentacion = "Recepción"
    }
    if(alimentacion === 6){
      valorComida = 7000
      Tipoalimentacion = "Brunch"
    }
    if(alimentacion === 7){
      valorComida = 11000
      Tipoalimentacion = "Box lunch"
    }
    if(montaje === 1){
      valorMontaje = 50000
      Tipodemontaje = "Auditorio"
    }
    if(montaje === 2){
      valorMontaje = 100000
      Tipodemontaje = "Escuela"
    }
    if(montaje === 3){
      valorMontaje = 150000
      Tipodemontaje = "Banquete"
    }
    if(montaje === 4){
      valorMontaje = 60000
      Tipodemontaje = "Imperial"
    }
    if(montaje === 5){
      valorMontaje = 80000
      Tipodemontaje = "Herradura"
    }
    if(montaje === 6){
      valorMontaje = 70000
      Tipodemontaje = "Ruso"
    }
    if(montaje === 7){
      valorMontaje = 110000
      Tipodemontaje = "Banquete sin pista"
    }
    if(montaje === 8){
      valorMontaje = 110000
      Tipodemontaje = "Redonda"
    }
    precioTotal = numeroP * valorComida + valorMontaje 
    alert("         Cotizacion          \nNombre del evento: "+nombreEv+"\nNombre de la dependencia: "+nombreEm+"\nNumero de personas: "+numeroP+"\nTipo de montaje: "+Tipodemontaje+"\nTipo de alimentacion: "+Tipoalimentacion+"\nTotal = "+precioTotal)
}