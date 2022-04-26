// / Ejercio 1
// -Pedir al usuario un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado

// 
// -Pedir al usuario un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado
//Pedir un prompt al usuario del 1-10
//Asignarlo a una variable
// Buscar manera para conocer los pares
//Ir numero por numero con la solucion

// let numeroEntrada = Number(prompt("Ingresa un numero del 1-10"))
// function numeroPar (){
//         for(let index= 0 ; index <= numeroEntrada; index++){
//             if(index % 2 == 0){
//                 console.log(index)
//             }
//         }
// }
// numeroPar ()

//----------------------------------------------- Ejercicio 2 --------------------------------------------------

// imprimir en consola la sumaa total de todos los digitos de una cantidad
// input: 1+2+3+4
// output: 10
// ingresar mas de 2 numeros 
// los numeros tendran que sumarse por unidad 
// realizar algoritmo para realizar suma entre ellos
// mostrar en consola la suma



// let  x = "1234";
// let y = 0;

// function sumaNumero() {
// x.split('').forEach(x => y += parseInt(x));
    
// }
// sumaNumero();
// console.log(y);
    
// ----------------------------------------------EJERCICIO 3--------------------------------------------------------

// let patron = ["*", "**", "***", "****", "*****", "******", "*******"];

// console.log(patron);

// input



function repetirHorizontal(repeticiones){
    
    let simbolo = ''

    for(let index = 0; index < repeticiones; index++){
        simbolo += '*'   
    }
    console.log(simbolo)
    return simbolo;
}

function repetirVertical(repeticiones){
    for(let index = 0; index < repeticiones; index++){
    repetirHorizontal(index)       
    
    }
    return
};

repetirVertical(10)













// -----------------------------------EJEMPLO--------------------------------------------------------------------------

// let koders = [
//     ['jose', 'de anda'],
//     ['danny', 'vazquez'],
//     ['Aaron', 'Enciso']
// ];
    
//     let resultado = [];

//     for(let index = 0; index < koders.length; index ++ ) {
//         koders[index]

//         let alumnosKoders = {
//             nombre: koders[index]    
//         };
//         resultado.push(alumnosKoders)

        

//     }

//     console.log(resultado)



// -----
//output

// let result = [
//     {
//         nombre: 'jose',
//         apellido: 'de anda'
//     },
//     {
//         nombre: 'danny',
//         apellido: 'vazquez'
//     },
//     {
//         nombre: 'Aaron',
//         apellido: 'Enciso'
//     }
// ];




    