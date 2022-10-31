import React from "react";

function CrearArrendamientoVives(){
    
    return (
    <main>
        <section className="text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1>Arrendamiento habitación vives</h1>
            </div>
          </div>
          
        </section>
        
        <div className="container">
        <h6>Información del estudiante: </h6>
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreE"
                placeholder="Nombre del estudiante"
                required
              />
            </div>
            
            <div className="col-md-2">
              <label for="disabledSelect" className="form-label">
                Tipo de Documento
              </label>
              <select id="Docuemto" className="form-select" required>
                <option></option>
                <option value={1}>T.I</option>
                <option value={2}>C.C</option>
              </select>
            </div>

            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Número de documento
              </label>
              <input
                type="number"
                className="form-control"
                id="Documento"
                placeholder="Documento del estudiante"
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
                placeholder="Teléfono del estudiante"
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
                id="correoEstudiante"
                placeholder="Correo del estudiante"
                required
              />
            </div>

            <h6>Información de la habitación: </h6>

            <div className="col-md-4">
              <label for="inputZip" className="form-label">
                Fecha de ingreso
              </label>
              <input type="date" className="form-control" id="fecha" required />
            </div>

            <div className="col-md-2">
              <label for="disabledSelect" className="form-label">
                Tipo de habitación
              </label>

              <select id="TipoHabitacion" className="form-select" required>
                <option></option>
                <option value={1}>Estándar</option>
                <option value={2}>Balcón</option>
                <option value={3}>Terraza</option>
              </select>

            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Número de la habitación
              </label>
              <input
                type="number"
                className="form-control"
                id="nombreE"
                placeholder="Número de habitación"
                required
              />
            </div>

            <h6>Información del Tutor (Solo para menores de edad):</h6>

            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Tutor legal
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreTutor"
                placeholder="Nombre del tutor"
                
              />
            </div>
            <div className="col-md-2">
              <label for="disabledSelect" className="form-label">
                Tipo de Documento
              </label>
              <select id="Docuemto" className="form-select" >
                <option></option>
                <option value={2}>C.C</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Número de documento
              </label>
              <input
                type="number"
                className="form-control"
                id="DocumentoTutor"
                placeholder="Documento del tutor"
                
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="correoTutor"
                placeholder="Correo del tutor"
                
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="form-control"
                id="telefonoTutor"
                placeholder="Teléfono del tutor"
                
              />
            </div>
            
            
            <button
              className="btn my-3 border-danger btn-outline-dark p-3"
              type="sumit"
            >
              Arrendar
            </button>
          </form>
        </div>
      </main>
      );
}

export default CrearArrendamientoVives;

