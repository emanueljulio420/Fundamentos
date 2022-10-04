import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CasaC from "./Paginas/Casa_c";
import Inicio from "./Paginas/Inicio";
import CotizarEvento from "./Paginas/CotizarEvento";
import Login from "./Paginas/Login"
import Vives from "./Paginas/Vives";
import InicioAdmin from "./Paginas/InicioAdmin";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/loggin" element={<Login/>}/>
        <Route path="/loggin/inicioAdmin" element={<InicioAdmin/>}/>
        <Route path="/vives" element={<Vives/>}/>
        <Route path="/casa_club" element={<CasaC/>}/>
        <Route path="/casa_club/cotizar" element={<CotizarEvento/>}/>
        <Route path="*" element={"404"}/>
        <Route path="/" element={<Inicio/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;