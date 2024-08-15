var radio = prompt("Ingrese el radio de la circunferencia");
var altura = prompt("Ingrese la altura del cilindro");

var volumen = Math.round(Math.PI * radio**2)/100;
var superficie = Math.round((2*Math.PI * radio * altura) + volumen)/100;

alert("El volúmen del cilindro es: "+ volumen+ " y su superficie: "+superficie);