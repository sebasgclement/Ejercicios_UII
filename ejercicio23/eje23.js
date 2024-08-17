let numeros = [];

for(let i=0; i < 10; i++){
    let val = parseInt(prompt(`Ingrese un valor para la posición ${i+1}`));
    numeros.push(val);
}

var numBuscado = parseInt(prompt("Ingrese el elemento buscado"));
var posicion =[];

for(let i=0; i < 10; i++){
    if (numeros[i] === numBuscado){
        posicion.push(i+1);
    }
}

if (posicion.length>0){
    console.log(`Las posiciones encontradas para el valor ${numBuscado} son: `);
    posicion.forEach(element => {
        console.log(element);
    });
} else{
    alert("El valor buscado es inexistente");
}