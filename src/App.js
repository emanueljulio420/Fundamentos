import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CasaC from "./Paginas/Casa_c";
import Inicio from "./Paginas/Inicio";
import CotizarEvento from "./Paginas/CotizarEvento";
import Login from "./Paginas/Login"
import Vives from "./Paginas/Vives";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/logging" element={<Login/>}/>
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