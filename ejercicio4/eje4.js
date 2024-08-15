var num1 = prompt("Ingrese un valor");
var num2 = prompt("Ingrese un valor");

var aux = num2;
num2= num1;
num1= aux;

alert("Los valores son numero 1: " + num1+ " y numero 2: "+ num2);