function logParams(a,b,c){
    console.log(a,b,c);
}
//JS muito flexivel
logParams(1,2,3);
logParams(1,2,3,4,5); //chama a função e ignora o que foi passado a mais
logParams(1,2); //ainda chama a função e põe undefined no c
logParams();

function defaultParams(a = 1,b = 2,c = 3){ //define o valor, quando não se passa nada
    console.log(a,b,c);
}

defaultParams(7,8,9);
defaultParams(7,8);
defaultParams(7);
defaultParams();

console.log(1,2,3,4,5,6,7,8,9,10);

//function logNums(nums){
//    for(let n of nums){
//        console.log(n);
//    }
//}
//
//logNums([1,2,3,4,5,6]);


console.log("--------------------------------");

//Operador spread/rest
function logNums(...nums){ //recebe uma quantidade variável de parâmetros e todos são armazenados dentro de uma função
    console.log(Array.isArray(nums));
    console.log(nums);
    for(let n of nums){
        console.log(n);
    }
}

logNums(1,2,3,4,5,6); //não é passado como array, mas é considerado um

function sumAll(...nums){
    let total = 0;
    for(let n of nums){
        total += n;
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));