var num;
var max=-999999;
var min=999999;
var sum =0;
var c=0;
var media;

while (true){
    num = parseInt(prompt("Ingrese un número [0 para salir]"));
    if (num!=0){
        sum += num;
        c++;
        if (num > max){
            max = num;
        }
        if (num < min){
            min = num;
        }
    }else{
        break;
    }
}
media = Math.round((sum/c)*100)/100;
alert(`La media de los valores es ${media}. El mayor es ${max}, y el menor es ${min}`);