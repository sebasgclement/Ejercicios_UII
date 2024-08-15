var cn =0; //contador para niñas
var cv=0; //contador para niños
do {
    let genero = prompt("Ingresa 0 para niño o 1 para niña");
    if (genero== 0){
        cv = cv + 1;
    } else if (genero == 1){
        cn = cn + 1;
    } else{
        alert("El género ingresado es incorrecto");
    }

    let dec = prompt("Ingrese 1 para seguir ingresando o 0 para salir");
    if (dec==1){
        continue;
    }else{
        break;
    }
} while (true);

var porNinios = (cv * 100) / (cn + cv);
var porNinias = (cn * 100) / (cn + cv);

alert (`De un total de ${cv+cn} alumnos, ${porNinios}% son niños y ${porNinias}% son niñas`);
console.log(`De un total de ${cv+cn} alumnos, ${porNinios}% son niños y ${porNinias}% son niñas`);