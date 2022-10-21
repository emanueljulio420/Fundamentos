import Header from "../Componentes/Header";
import Index from "../Componentes/Inicio";
import Footer from "../Componentes/Footer";
import Welcome from "../Componentes/monda.js"


function Inicio() {

  
  return (
    <div className="index">
      <Welcome name={'sara'}/>;
      <Header />
        <Index />
        <Footer />
    </div>
  );
}

export default Inicio;
