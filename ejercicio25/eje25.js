let notas = [];
let def=0;
let reg=0;
let buen=0;
let exce=0;

for (let i=0; i<20; i++){
    let val = Math.floor(Math.random()*21);
    notas.push(val);
    console.log(notas[i]);
}

notas.forEach(element => {
    if(element>=0 && element<= 5){
        def++;
    } else if(element>=6 && element<= 10){
        reg++;
    }else if(element>=11 && element<=15){
        buen++;
    }else{
        exce++;
    }
});

alert(`La cantidad de notas deficientes es ${def}, de regulares es ${reg}, de buenas es ${buen} y de excelentes ${exce}`);