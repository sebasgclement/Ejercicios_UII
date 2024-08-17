let num = [];

for(let i=0; i < 5; i++){
    valor = parseInt(prompt("Ingrese un número"));
    num.push(valor);
}

num.forEach(element => {
   console.log(element); 
});