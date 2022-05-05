const array=[];
let som=0;

do{
    let number = parseInt(prompt("Inserisci un numero"));
    som += number;
    array.push(number);
}while(som<50);


if (som===50){
    alert("la somma dei numeri inseriti è uguale a 50");
    console.log(array); 
}
else{
    alert("la somma dei numeri è maggiore di 50");
    console.log(array);
}
