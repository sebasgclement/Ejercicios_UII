let notas = [0, 3, 6, 10, 12, 15, 14, 16, 4, 9, 12, 20, 19, 0, 2 ];

let cAprobados = 0;
let cDesap = 0;

notas.forEach(element => {
    if (element >= 0 && element <= 10){
        cDesap++;
    } else{
        cAprobados++;
    }
});

alert(`De ${notas.length} notas, ${cAprobados} están aprobadas y ${cDesap} desaprobadas.`);