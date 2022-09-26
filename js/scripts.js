
let nombre = prompt ("Ingresa tu Nombre")


var parcial,final,promedio;
var parcial = parseFloat(prompt("Ingresa la Nota de tu Parcial"))
var final = parseFloat(prompt("Ingresa la Nota Final"));
var promedio = (parcial + final)/2;

if (promedio >=10) {
    document.write("El promedio es "+promedio+" APROBADO !Felicidades!");
}else{
    document.write("El promedio es "+promedio+" DESAPROBADO debe recursar");
}