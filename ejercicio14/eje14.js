var num = parseInt(prompt("Ingrese un número entero: "));
var sum =0;
while (true) {
    if (num>0){
        for (let i=1; i<=num; i++){
            sum += i;
        }
    }else{
        alert ("El número no es natural");
        break;
    }
    alert(`La sumatoria de los ${num} números naturales es: ${sum}`);
}


