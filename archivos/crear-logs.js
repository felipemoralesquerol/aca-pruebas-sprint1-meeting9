console.log('Estoy en crear-logs')

// declare una variable de nombre fs para utilizar el modulo fs (file system)
let fs = require('fs')

function crearArchivo(nombre_archivo, texto) {
    // creamos el archivo de nombre traza.log
    fs.writeFileSync(nombre_archivo, texto + '\n');
}

function appendArchivo(nombre_archivo, texto) {
    fs.appendFileSync(nombre_archivo, texto + '\n');  
}

//crearArchivo('registro.log','Registro de información')
let nombreArchivo = 'logs/registro.log';
appendArchivo(nombreArchivo,'Hola1')
appendArchivo(nombreArchivo,'Hola2')
appendArchivo(nombreArchivo,'Hola3')
appendArchivo(nombreArchivo,'Hola4')
appendArchivo(nombreArchivo,'Hola5')









