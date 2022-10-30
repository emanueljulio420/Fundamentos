import Index from "../Componentes/Inicio";
import Footer from "../Componentes/Footer";
import HeaderAdmin from "../Componentes/HeaderAdmin";

function InicioAdmin() {
  return (
    <div className="index">
      <HeaderAdmin />
      <Index /> 
      <Footer />
    </div>
  );
}

export default InicioAdmin;