var num1= prompt("Ingrese el número 1");
var num2= prompt("Ingrese el número 2");
var max;


if(num1===num2){
    max="Los números son iguales";
} else if (num1> num2){
    max=`El número ${num1} es mayor a ${num2}`;
}else{
    max=`El número ${num2} es mayor a ${num1}`;
}

alert(max);

