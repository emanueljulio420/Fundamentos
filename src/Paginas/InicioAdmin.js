import Inicio from "../Componentes/InicioAdmin";  
import HeaderAdmin from "../Componentes/HeaderAdmin";

function InicioAdmin() {
  return (
    <div className="index">
      <HeaderAdmin />
      <Inicio /> 
    </div>
  );
}

export default InicioAdmin;