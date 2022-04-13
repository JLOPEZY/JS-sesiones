// alert("conectado")
 

// function sumar(num1, num2){
//     return num1+num2;

// }
// let resultado = sumar(1, 2);
// console.log(resultado);

// function resta(num1, num2){

// }


// -------------------------------------1er ejercicio--------------------------------------------------
// let num1 = prompt("Ingresa el primer numero");
// console.log (num1, "numero1");

// let num2 = prompt("Ingresa el segundo numero");
// console.log (num2, "numero2");

// function suma(num1, num2){
//     return num1 + num2; 
// }

// function resta(num1, num2){
//     return num1 - num2; 
// }

// function multiplicación(num1, num2){
//     return num1 * num2; 
// }

// function divicion(num1, num2){
//     return num1 * num2; 
// }
// function potencia(num1, num2){
//     return num1 ** num2; 
// }

// num1 = Number(num1);
// num2 = Number(num2);
// console.log(typeof(num1))
// console.log(typeof(num2))

// console.log (num1 + num2, "suma");
// console.log (num1 - num2, "resta");
// console.log (num1 * num2, "multiplicación");
// console.log (num1 / num2, "División");
// console.log (num1 ** num2, "Potencia al cuadrado");

// --------------------------------------ejercicio 2----------------------------------------

let num1 = prompt("Ingresa el primer numero");
console.log (num1, "numero1");

let num2 = prompt("Ingresa el segundo numero");
console.log (num2, "numero2");

function mayor(num1, num2){
    return num1 > num2;
}

num1 = Number(num1);
num2 = Number(num2);

if(num1 > num2){
    console.log("El numero ingresado", num1, "es mayor que este", num2);

}else{

    console.log("El numero ingresado", num1, "no es mayor que este", num2);
}

console.log (num1 > num2)


