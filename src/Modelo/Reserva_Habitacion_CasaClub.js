import axios from "axios";

class Reserva_Habitacion_CasaClub{

    constructor(id,correo,telefono,nombre,Fecha_ingreso,Fecha_Salida){
        this.cedula = id;
        this.nombre = nombre;
        this.telefono = telefono
        this.correo = correo;
        this.checkin = Fecha_ingreso;
        this.checkout = Fecha_Salida;
    }

    nuevaReserva = (datos) => {
        axios.post("http://localhost:4000/reservaHabitacionesC", datos)
          .then(({ data }) => {
            console.log(data)
            alert("Reserva creada")
          })
          .catch(({ response }) => {
            console.log(response.data);
          });

      };

      eliminarReserva = async (Id) =>{
        try {
            const{data}= await axios.post('http://localhost:4000/eliminarReservaHabitacionesC', {Id:Id}) 
            alert('Eliminado correctamente')
        } catch (error) {
            console.log(error)
            
        }
      };

    habitaciones = async (setUserList) => {
        const { data } = await axios.get("http://localhost:4000/habitacionesC");
        console.log(data);
        setUserList(data);
      };



}

export default Reserva_Habitacion_CasaClub;