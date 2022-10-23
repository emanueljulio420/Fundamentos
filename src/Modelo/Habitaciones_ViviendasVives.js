class Habitaciones_ViviendasVives {

    constructor(id,nombre,TipoDeHabitacion,Fecha_ingreso,Fecha_Salida,cantidadPersonas){
        this.id = id;
        this.nombre = nombre;
        this.tipo_habitacion = TipoDeHabitacion;
        this.cantidadPersonas = cantidadPersonas
        this.checkin = Fecha_ingreso;
        this.checkout = Fecha_Salida;
    }
}