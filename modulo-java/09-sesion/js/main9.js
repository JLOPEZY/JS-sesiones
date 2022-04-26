// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 


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

// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

function getMentorAvgBySignature (mentors) {
//     const numMentors = mentors.length
//     let htmlTotal = 0
//     let cssTotal = 0
//     let jsTotal = 0
//     let reactTotal = 0
    mentors.forEach((mentor, index) => {
//         // console.log(mentor)
//         // console.log(mentor.name)
//         // console.log(mentor.scores) //es un arreglo
        mentor.scores.forEach((signature) =>{
//             // console.log(signature)
            if(signature.signature === 'HTML') htmlTotal += signature.score

            if(signature.signature === 'CSS') cssTotal += signature.score

            if(signature.signature === 'JS') jsTotal += signature.score

            if(signature.signature === 'ReactJS') reactTotal += signature.score


        })

    })
    // console.log("----totales----")  
    // console.log('htmlTotal', htmlTotal)
    // console.log('cssTotal', cssTotal)
    // console.log('jsTotal', jsTotal)
    // console.log('reactTotal', reactTotal)

    // const avgHtml = htmlTotal / numMentors
    // const avgCss = cssTotal / numMentors
    // const avgJs = jsTotal / numMentors
    // const avgReact = reactTotal  / numMentors

    // PROMEDIOS
    // console.log('----promedios----')
    // console.log('avgHtml', avgHtml)
    // console.log('avgCss', avgCss)
    // console.log('avgJs', avgJs)
    // console.log('avgReact', avgReact)
    // return{avgHtml: avgHtml, avgCss: avgCss, avgJs: avgJs, avgReact: avgReact}

}

// const allAvegare = getMentorAvgBySignature (mentorsArray)
// console.log('El promedio de los modulos son:')
// console.log(allAvegare)

function getAllAvgMentors (mentors) {
    let arrayMentorsAvg = []
    mentors.forEach((mentor, index) => {
        let totalMentor = 0
        let numSignature = mentor.scores.length
        mentor.scores.forEach((score) => {
            totalMentor += score.score
         })
         let avgMentor = totalMentor / numSignature
        //  console.log(mentor.name)
        //  console.log('avgMentor', avgMentor)

         const newDataMentor = {    
             name: mentor.name,
             average: avgMentor
         }    
         arrayMentorsAvg.push(newDataMentor)
    })
    return arrayMentorsAvg
}
const averageMentors = getAllAvgMentors(mentorsArray)
console.log('Average de todos los mentores: ', averageMentors)

//

function filterMentors (mentors) {
     const mentorsFiltered = []
     mentors.forEach ((mentor) => {
            if(mentor.average >= 9) {
             mentorsFiltered.push(mentor)
            }  
     })
     return mentorsFiltered
}

filterMentors(averageMentors)