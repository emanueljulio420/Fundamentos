import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CasaC from "./Paginas/Casa_c";
import Inicio from "./Paginas/Inicio";
import CotizarEvento from "./Paginas/CotizarEvento";
import Login from "./Paginas/Login"
import Vives from "./Paginas/Vives";
import InicioAdmin from "./Paginas/InicioAdmin";
import Eventos from "./Paginas/Eventos";
import HabitacionesCasa from "./Paginas/Habitaciones_Casa_club";
import CrearEventos from "./Paginas/CrearEvento";
import ModificarEvento from "./Paginas/ModificarEvento"
import EliminarEvento from "./Paginas/EliminarEvento"
import CrearArrendamientoVives from "./Paginas/CrearArrendamientoVives";
import CrearReservaHabitacionCasaClub from "./Paginas/CrearReservaHabitacionCasaClub";
import ModificarReservaHabitacionCasaClub from "./Paginas/ModificarReservaHabitacionCasaClub";
import ModificarArrendamiento from "./Paginas/ModificarArrendamiento";
import CrudViviendasVives from "./Paginas/ViviendaVives"



function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/loggin" element={<Login/>}/>
        <Route path="/loggin/inicioAdmin" element={<InicioAdmin/>}/>
        <Route path="/loggin/inicioAdmin/eventos" element={<Eventos/>}/>
        <Route path="/loggin/inicioAdmin/eventos/crear" element={<CrearEventos/>}/>
        <Route path="/loggin/inicioAdmin/eventos/modificar" element={<ModificarEvento/>}/>
        <Route path="/loggin/inicioAdmin/eventos/eliminar" element={<EliminarEvento/>}/>
        <Route path="/loggin/inicioAdmin/h_casa_club" element={<HabitacionesCasa/>}/>
        <Route path="/loggin/inicioAdmin" element={<InicioAdmin/>}/>
        <Route path="/vives" element={<Vives/>}/>
        <Route path="/casa_club" element={<CasaC/>}/>
        <Route path="/casa_club/cotizar" element={<CotizarEvento/>}/>
        <Route path="*" element={"404"}/>
        <Route path="/" element={<Inicio/>}/>

        <Route path="/VivendasVives/CrearArrendamiento" element ={<CrearArrendamientoVives/>}/>
        <Route path="/EventosCasaClub/CrearReservaHabitacionCasaClub" element ={<CrearReservaHabitacionCasaClub/>}/>

        <Route path="/HabitacionCasaClub/ModificarReserva" element ={<ModificarReservaHabitacionCasaClub/>}/>
        <Route path="/VivendasVives/ModificarArrendamiento" element ={<ModificarArrendamiento/>}/>

        <Route path="/ViviendasVives" element ={<CrudViviendasVives/>}/>



      </Routes>
    </Router>
    </div>
  );
}

export default App;