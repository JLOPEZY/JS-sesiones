// aplicar filtro por signature
// input : 'Js'

// output:
//   {
//        signature: 'Js',
//        koders:  ["Ivan", "Freddy"],
//        mentor: 'ivan diaz'
//   }

// input: "Freddy";
// output: ["Js", "HTML", "React"];

const generacion18 = [
  {
    signature: "Js",
    koders: ["Ivan", "Freddy"],
    mentor: "Ivan Diaz"
  },
  {
    signature: "HTML",
    koders: ["Jason", "Penny", "Freddy"],
    mentor: "Alan "
  },
  {
    signature: "CSS",
    koders: ["Arnold", "Gerald"],
    mentor: "David "
  },
  {
    signature: "Introduccion",
    koders: ["Steve", "Charlie"],
    mentor: "Elvira "
  },
  {
    signature: "React",
    koders: ["Ivan", "Harry", "Freddy"],
    mentor: "Alejandra"
  }
];

// function filtrarPorMateria(){
//     let materia = prompt ('Igrese una materia');

//     for (let index = 0; index < generacion18.length; index++) {
      
//         if(materia === generacion18[index].signature) {
//            console.log(generacion18[index])     
//         }

//     }

// };

// filtrarPorMateria();



function filtrarPorKoders(){
    let koder = prompt ('Igrese el nombre del Koder');

    for (let index = 0; index < generacion18.length; index++) {
      
        if(koder === generacion18[index].koders) {
           console.log(generacion18[index])     
        }

    }

};

filtrarPorKoders()