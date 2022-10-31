var mysql = require('mysql')

var conexion = mysql.createConnection({
host:'127.0.0.1',
database: 'udem',
user:'root',
password:''
});

conexion.connect(function(error){
    if(error){
        throw error;

    } else{
        console.log('Conexion Exitosa');
    } 
});

// Ejemplo de consulta 

// exportamos como modulo la conexion para usarla en otros archivos
module.exports = conexion;