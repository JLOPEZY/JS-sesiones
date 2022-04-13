// ejecricios  sesion 5
// Ejercicio 1:
// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios,
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: ‘6AQX>H’

let tabla1 = prompt("Ingresa un numero");
function aleatorio(len){
    let aleatorio1 = '';
    let caracteres = 'as@hrydhr!#$%&/()?';

    for(let i = 0; i<len; i++){
        aleatorio1 += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        console.log("Aleatorio", aleatorio1);


    }
        console.log(aleatorio1)
}

    aleatorio(6);


// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10
// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6


// let tabla1 = prompt("Ingresa el numero del 1 al 10 para multiplicar");

// function lastablas() {
    
// for(let x=1;x<=10;x++){
//     console.log(tabla1+"x"+x+"="+(tabla1xx));

// }

// } 
//     lastablas()
