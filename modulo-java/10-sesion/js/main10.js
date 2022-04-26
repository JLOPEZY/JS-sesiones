
const numeros = [2, 5, 6, 1];

const numerosConCalculo = numeros.map((item, index, arr) =>{
    return item + 3;
});

// const numerosFiltrados = numeros.filter((item)=> item < 3);

// -----------------Cuando es mas de 2 lineas
// const numerosFiltrados = numeros.filter((item) =>{
//     if(item < 3){
//         return item
//     }
// })

// console.log(numerosFiltrados)



// const personas = [
//     {
//         nombre: 'jason',
//         edad: 9,
//     },
//     {
//         nombre: 'freddy',
//         edad: 9,
//     },
//     {
//         nombre: 'Peny',
//         edad: 9,
//     },
//     {
//       nombre: 'Arnold',
//         edad: 9,
//     },

// ];

// ['jason', 'freddy', 'Peny', 'Arnold' ]

// const nombres = personas.map((item) =>{
//     // const frase = `hola soy ${item.nombre} y tengo ${item.edad}`
//     return {
//         villano: item.nombre,
//         age: item.edad
//     };
// });

// console.log(nombres);



const mentorsArray = [
    {
        name:"Ivan",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Oscar",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

// - Crear una lista con los mentores y sus promedios
// - Obtener la lista de mentores cuyo promedio sea mayor a 9.5 



// const resultadoDeMentores = mentorsArray.map((mentor) => {
//     let accum = 0;
//     mentor.scores.forEach((calificacion) => {
//         accum += calificacion.score
//     });

//     const promedio =  accum / mentor.scores.length;

//     const mentorInfo = {
//     nombre: mentor.name,
//     promedio,
//     };

//     return mentorInfo;
// });    
// console.log(resultadoDeMentores);

// - Obtener la lista de mentores cuyo promedio sea mayor a 9.5 

// const aprovados = resultadoDeMentores.filter((promedio) => {
//     if(promedio.promedio > 9) {
//        return promedio;     
//     }
// })

// console.log(resultadoDeMentores);
// console.log(aprovados);

// - Crear un nuevo arreglo con los mentores cuyo nombre inicien con una vocal 
// - Crear un nuevo arreglo con las inciales de cada mentor 


// input : [
//     'Ivan Diaz Alarcon'
// ]

// outpu: [
//     I.D.A
// ] 

// const resultado = mentorsArray.filter((mentor) =>{
//     if(mentor.name[0].match(/[aeiou]/i)){
//         return mentor

//     }
    
// })
// console.log(resultado)

const iniciales = mentorsArray.filter((mentor) => {
    if(mentor.name.slice(0,1)){
        return mentor
    }

})

console.log (iniciales)