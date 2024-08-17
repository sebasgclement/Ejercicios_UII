let num1 = [];
let num2 = [];
let res = [];

for(let i=0; i<5; i++){
    let val1 = parseInt(prompt(`Ingrese el valor para la posición ${i+1} del primer arreglo`));
    num1.push(val1);
    let val2 = parseInt(prompt(`Ingrese el valor para la posición ${i+1} del segundo arreglo`));
    num2.push(val2);
    res.push(num1[i] + num2[i]);
}

for (let i=0; i<5; i++){
    console.log(`${num1[i]} + ${num2[i]} = ${res[i]}`);
}