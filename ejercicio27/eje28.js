
function factorial(N) {
    if (N === 0 || N === 1) {
        return 1;
    }
    let F = 1;
    for (let i = 2; i <= N; i++) {
        F *= i;
    }
    return F;
}


function calcularFactorialesEntreNumeros() {

    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));


    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }


    for (let i = num1; i <= num2; i++) {
        console.log(`El factorial de ${i} es ${factorial(i)}`);
    }
}


calcularFactorialesEntreNumeros();
