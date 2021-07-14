import fs from 'fs';

function registrarLog(operacion, a, b, resultado){
    fs.appendFile('calculadora/log.txt', a + ' ' + operacion + ' ' + b + ' = ' + resultado + '\n', (err) =>{
        if (err) {
            console.log(err);
        }
        
    } )
}

function sumar(a, b) {
    let resultado = a + b;
    registrarLog('+', a, b, resultado);
    return resultado;
};

function restar(a, b) {
    let resultado = a - b;
    registrarLog('-', a, b, resultado);
    return resultado;
};


export { sumar, restar };
