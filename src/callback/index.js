function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {//se le puede poner cualquier nombre
    return callback(num1, num2);
};

console.log(calc(2,2,sum));//no es necesario invocar la función, ni enviarle parametros
//4

setTimeout(function () {
console.log('Hola estoy en un setTimout de 2s');
}, 2000);

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar');


const myFunc = () => console.log('Log after 2s');
execCallback(myFunc);

function execCallback(callback) {
    // Tu código aquí 👈
    return setTimeout(callback, 2000);
  };