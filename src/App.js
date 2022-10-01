import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CasaC from "./Paginas/Casa_c";
import Inicio from "./Paginas/Inicio";
import CotizarEvento from "./Paginas/CotizarEvento";


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/casa_club" element={<CasaC/>}/>
        <Route path="/casa_club/cotizar" element={<CotizarEvento/>}/>
        <Route path="/" element={<Inicio/>}/>
        <Route path="*" element={"404"}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;