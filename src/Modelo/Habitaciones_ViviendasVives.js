import axios from "axios";

class Habitaciones_ViviendasVives {

    constructor(id,nombre,TipoDeHabitacion,Fecha_ingreso,Fecha_Salida,cantidadPersonas){
        this.id = id;
        this.nombre = nombre;
        this.tipo_habitacion = TipoDeHabitacion;
        this.cantidadPersonas = cantidadPersonas
        this.checkin = Fecha_ingreso;
        this.checkout = Fecha_Salida;
    }

    nuevaReserva = (datos) => {
        axios.post("http://localhost:4000/reservaHabitacionesV", datos)
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
            const{data}= await axios.post('http://localhost:4000/eliminarReservaHabitacionesV', {Id:Id}) 
            alert('Eliminado correctamente')
        } catch (error) {
            console.log(error)
            
        }
      };

    habitaciones = async (setUserList) => {
        const { data } = await axios.get("http://localhost:4000/habitacionesV");
        console.log(data);
        setUserList(data);
      };


    }
 
export default Habitaciones_ViviendasVives;