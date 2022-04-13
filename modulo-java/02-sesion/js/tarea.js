


// Solicitar calificacion y guaradarla en una vaRIABLE
// usando la variable de puntuacion  voy a un if para deducir la calificacion 
// voy a evaluar la variable de la calificacion con un swichpara determinar que voy a mostrar en la consola

let puntuacion = prompt("Ingresa la evaluacion obtenida del 0 al 100");
let calificacion

if(puntuacion < 60) {
    calificacion = "F"
    
} else if(puntuacion <= 70){
    calificacion = "D"

} else if(puntuacion <= 80){
    calificacion = "C"

} else if(puntuacion <= 90){
    calificacion = "B"

} else if(puntuacion <= 100){
    calificacion = "A"  
}else {
    calificacion = "Dato invalido"
};

switch(calificacion) {
    case "F":
        console.log("Tu calificación es reprobado:" + calificacion)
    break;
    case "D":
        console.log("Tu calificación es insuficiente:" + calificacion)
    break;  
    case "C":
        console.log("Tu calificación es regular:" + calificacion)
    break;  
    case "B":
        console.log("Tu calificación es buena:" + calificacion)
    break;
    case "A":
        console.log("Tu calificación es excelente:" + calificacion)
    break; 

    default:
        
}

console.log(calificacion, "calificación");
