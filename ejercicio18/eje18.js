let anio=1;

while (anio>0){
    anio=parseInt(prompt("Ingrese el año a comprobar - [negativo para salir]"));
    if (anio % 4 == 0 && anio % 100 != 0 || anio % 4 == 0 && anio % 400 == 0){
        alert(`El año ${anio} es bisiesto`);
    } else{
        alert(`El año ${anio} no es bisiesto`);
    }
}