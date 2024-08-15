var num = 0;
while(true){
    if (num!=0){
        if (num % 2 == 0){
            alert("El número es par");
            break;
        }else{
            alert("El número es impar");
            break;
        }
    } else{
        num = parseInt(prompt("Ingrese un número mayor a 0"));
    }
}