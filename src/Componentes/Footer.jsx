import "../Estilos/Estilos.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className=" texto">
        <p>
          Horarios de atención: <br />
          Lunes a viernes de 8 am a 12 pm y de 2 pm a 8 pm <br /> Sabados de 9
          am a 5 pm
        </p>
      </div>
      <div className="division">
        <div>
          <p>
            Correo electrónico: <br />
            casaegresado@udemedellin.edu.co
          </p>
        </div>
        <div>
          <p>
            Teléfono: <br />
            590 45 00 extensiones: - 20223 - 20227 - 10319
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
