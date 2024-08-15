// Paso 1: Leer los valores de entrada
let dia = parseInt(prompt("Ingrese el día (1-31):"));
let mes = parseInt(prompt("Ingrese el mes (1-12):"));
let año = parseInt(prompt("Ingrese el año (mayor a 0):"));

// Paso 2: Validar la fecha
function esFechaValida(dia, mes, año) {
    if (año <= 0 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false;
    }

    // Comprobar días en febrero (año bisiesto o no)
    if (mes === 2) {
        if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
            // Año bisiesto
            return dia <= 29;
        } else {
            // Año no bisiesto
            return dia <= 28;
        }
    }

    // Comprobar días en meses con 30 días
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        return dia <= 30;
    }

    // Si llega aquí, es un mes con 31 días
    return dia <= 31;
}

if (!esFechaValida(dia, mes, año)) {
    alert("Error: Fecha no válida.");
} else {
    // Paso 3: Convertir el mes a su nombre correspondiente
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                   "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    let nombreMes = meses[mes - 1]; // Obtener el nombre del mes
    
    // Mostrar la fecha en el formato solicitado
    alert(`${dia} de ${nombreMes} de ${año}`);
}
