//Callback
function suma(value1, value2) {
    return value1 + value2;
}

function calc(value1, value2, callback) {
    return callback(value1, value2);
}

console.log(calc(5, 6, suma));//no es necesario poner los parentesis ni pasar los argumentos al callback

//Set Time out

setTimeout(function () {
    console.log("Hola JS");
}, 5000)

function saludo(name) {
    console.log(`Hola ${name}`);
}

setTimeout( saludo, 2000, "JUAN");//los argumentos se pasan 1 funcion, 2 tiempo, 3 argumentos de la funcion
