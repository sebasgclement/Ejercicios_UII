var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");
var num3 = prompt("Ingrese el tercer número");
var max;


    if (num1>num2 && num1>num3){
        max= `${num1} es mayor a ${num2} y ${num3}`;
    }else if (num2>num3 && num2>num1){
        max = `${num2} es mayor a ${num1} y ${num3}`;
    } else if (num3>num1 && num3>num2){
        max = `${num3} es mayor a ${num1} y ${num2}`;
    } else{
        max="Alguno de los números coincide";
    }
 

alert(max);

