// Crea un archivo con extensión js.
// Declara un array con hobbies favoritos.
// Muestra cada uno de los hobbies utilizando foreach para mostrar cada elemento.
// Almacena cada hobbie en un archivo txt con la librería FS


let fs = require('fs');


hobbies = ['programar', 'rugby', 'aeromodelismo', 'aviación', 'artes marciales', 'nadar']

hobbies.forEach(element => {
    console.log(element);
    //fs.appendFileSync('logs/hobbies.txt', element + '\n');
    fs.appendFileSync('logs/'+element+'.txt', element + '\n');

});
