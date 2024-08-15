var x = prompt("Ingrese un número");
if (x >= 0){
    do {
        let potencia = x ** 2;
        let raiz = x ** 0.5;

        console.log("Del número " + x + " la potencia es: " + potencia + "y su raiz es: " + raiz);
        break;
    } while (x != 0);
} else{
    alert("El número es menor que 0")
}


