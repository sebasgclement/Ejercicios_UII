var n1 = parseInt(prompt ("Ingrese el primer número"));
var n2 = parseInt(prompt ("Ingrese el segundo número"));
var n3 = parseInt(prompt ("Ingrese el tercer número"));
var resultado;

if (n1<0){
    resultado= n1 * n2 * n3;
} else{
    resultado = n1 + n2 + n3;
}

alert("El resultado es: " + resultado);