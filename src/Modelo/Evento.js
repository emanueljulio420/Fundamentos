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

    nuevoEvento = (numeroEventos, datos) => {
      console.log(numeroEventos)
        axios.post("http://localhost:4000/evento", datos)
          .then(({ data }) => {
            console.log(data)
            alert('El numero de evento es: '+ (numeroEventos + 1))
          })
          .catch(({ response }) => {
            console.log(response.data);
          });

      };
 

    onDelete= async(Id) =>{
      try {
          const{data}= await axios.post('http://localhost:4000/api/eliminar', {Id:Id}) 
          alert('Eliminado correctamente')
      } catch (error) {
          console.log(error)
          
      }
      
  }

}  

export default evento;