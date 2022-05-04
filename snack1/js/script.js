const firstArray=fillArray();
const secondArray=fillArray();
let diff=0

console.log(firstArray);
console.log(secondArray);

if (firstArray.length < secondArray.length){
    diff = secondArray.length-firstArray.length;
    addArray(firstArray,diff);
} else if(firstArray.length > secondArray.length){
    diff = firstArray.length-secondArray.length;
    addArray(secondArray,diff);
}

console.log(firstArray);
console.log(secondArray);

function fillArray(){
    let counter=0;
    arrayLength=getRnd(1,30);
    const array=[];
    while(counter<arrayLength) {
        array.push(getRnd(1,60));
        counter++;
    }
    return array;
}

function addArray(array, diff){
    for (let i=0;i<diff;i++){
        array.push(getRnd(1,99));
    }
}   

function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}