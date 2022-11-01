import axios from "axios";


class evento {

    constructor( Id, IdSocio, NombreE,
        NombreD,
        NombreC,
        telefonoC,
        Fecha,
        Hora,
        Tipodemontaje,
        NumeroP,
        Alimentacion,
        Notas){
            this.Id = Id
            this.Id = IdSocio
            this.IdSocio = IdSocio;
            this.NombreE = NombreE;
            this.NombreD = NombreD;
            this.NombreC = NombreC;
            this.telefonoC = telefonoC;
            this.Fecha = Fecha;
            this.Hora = Hora;
            this.Tipodemontaje = Tipodemontaje;
            this.NumeroP = NumeroP;
            this.Alimentacion = Alimentacion;
            this.Notas = Notas;

    }

    nuevoEvento = (body) => {
        axios.post("http://localhost:4000/eventoCrear", body)
          .then(({ data }) => {
            console.log(data)
            localStorage.setItem('auth', 'yes')
            alert("Login correcto");
            
          })
          .catch(({ response }) => {
            console.log(response.data);
            alert("Login incorrecto");
  
          });

      };
 




      
}  

export default evento;