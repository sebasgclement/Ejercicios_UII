var mes = parseInt(prompt("Ingrese el número del mes: "));
var precio = parseFloat(prompt("Ingrese el monto de la compra: "));

if (mes== 10){
    var total = precio - (precio * 0.15);
} else{
    total = precio;
}

switch (mes) {
    case 1:
        alert("El costo en Enero es del 100%: " + total);
        break;
    case 2:
        alert("El costo en Febrero es del 100%: " + total);
        break;
    case 3:
        alert("El costo en Marzo es del 100%: " + total);
        break;
    case 4:
        alert("El costo en Abril es del 100%: " + total);
        break;
    case 5:
        alert("El costo en Mayo es del 100%: " + total);
        break;
    case 6:
        alert("El costo en Junio es del 100%: " + total);
        break;
    case 7:
        alert("El costo en Julio es del 100%: " + total);
        break;
    case 8:
        alert("El costo en Agosto es del 100%: " + total);
        break;
    case 9:
        alert("El costo en Septiembre es del 100%: " + total);
        break;
    case 10:
        alert("El costo en Octubre tiene un 15% de descuento: " + total);
        break;
    case 11:
        alert("El costo en Noviembre es del 100%: " + total);
        break;
    case 12:
        alert("El costo en Diciembre es del 100%: " + total);
        break;
    default:
        alert("El mes no existe")
        break;
}