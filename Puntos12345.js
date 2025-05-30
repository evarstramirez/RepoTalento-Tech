//Punto 1
let num1=10;
let num2=5;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
document.writeln("el primer numero es: " + num1 + "<br>");
document.writeln("el segundo numero es: " + num2 + "<br>");
document.writeln("el resultado de la suma es: " + suma + "<br>");
document.writeln("el resultado de la resta es: " + resta + "<br>");
document.writeln("el resultado de la multiplicacion es: " + multiplicacion + "<br>");
document.writeln("el resultado de la division es: " + division + "<br>");

//Punto 2 y 3
function realizarOperacion1(num1, num2, operacion){
    if(operacion === "Suma"){
        return num1+num2;
    }else if (operacion === "Resta"){
        return num1-num2;
    }else if(operacion ==="Multiplicacion"){
        return num1*num2;
    }else if(operacion === "Division"){
        if (num2 != 0){
            return num1/num2;
        }else {
            return "Error: División por cero no permitida.";
        }        
    }else {
        return "Error: Operacion no reconocida.";
    }

}
document.writeln(realizarOperacion1(10, 5, "Suma" )+ "<br>");
document.writeln(realizarOperacion1(10, 5, "Resta" )+ "<br>");
document.writeln(realizarOperacion1(10, 5, "Multiplicacion")+ "<br>");
document.writeln(realizarOperacion1(10, 5, "Division")+ "<br>");

//Punto 4 y 5
function realizarOperacion2(){
   while(true){
    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");
    if (operacion === "salir") {
        alert("Gracias por usar el programa. ¡Hasta luego!");
        break;
    }
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;
    if (operacion === "suma") {
        resultado = num1 + num2;
    }else if (operacion === "resta") {
        resultado = num1 - num2;
   } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("Error: División por cero no permitida.");
            continue; // Volver al inicio del bucle
        }
    }else{
        alert("Error: Operación no válida. Solo se permiten suma, resta, multiplicación y división.");
        continue; // Volver al inicio del bucle
    }
    alert("El resultado de la " + operacion + " es: " + resultado);
}
}
 realizarOperacion2();