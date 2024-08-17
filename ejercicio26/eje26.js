let vecA =[];
let vecB = [];
let vecC = [];
let opcion=0;

while(opcion!=6){
    opcion = parseInt(prompt(
        "Menú de opciones:\n" +
        "1. Llenar Vector A de manera aleatoria.\n" +
        "2. Llenar Vector B de manera aleatoria.\n" +
        "3. Realizar C = A + B.\n" +
        "4. Realizar C = B - A.\n" +
        "5. Mostrar un Vector (A, B, o C).\n" +
        "6. Salir."
    ));
    switch (opcion) {
        case 1:
            for (let i=0; i<10; i++){
                let val = Math.floor((Math.random()*201)-100);
                vecA.push(val);
            }
            break;
        case 2:
            for (let i=0; i<10; i++){
                let val = Math.floor((Math.random()*201)-100);
                vecB.push(val);
            }
            break;
        case 3:
            if (vecA.length == 0){
                alert("El vector A está vacío");
                break;
            } else if(vecB.length == 0){
                alert("El vector B está vacío");
                break;
            }else{
                for (let i=0; i<10; i++){
                    vecC.push(vecA[i] + vecB[i]);
                }
                break;
            }
        case 4:
            if (vecA.length == 0){
                alert("El vector A está vacío");
                break;
            } else if(vecB.length == 0){
                alert("El vector B está vacío");
                break;
            }else{
                for (let i=0; i<10; i++){
                    vecC.push(vecB[i] - VecA[i]);
                }
                break;
            }
        case 5:
            let op = prompt("Ingrese el vector a mostrar - A, B o C");
            if (op=="A" || op=="a"){
                vecA.forEach(element => {
                    console.log(element);
                });
                break;
            } else if (op=="B" || op=="b"){
                vecB.forEach(element => {
                    console.log(element);
                });
                break;
            } else if (op=="C" || op=="c"){
                vecC.forEach(element => {
                    console.log(element);
                });
                break;
            } else{
                alert("El vector ingresado no existe");
                break;
            }
        case 6:
            alert("Saliendo...");
            break;
        default:
            alert("La opción ingresada es incorrecta");
            break;
    }
}
