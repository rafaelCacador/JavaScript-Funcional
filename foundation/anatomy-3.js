//Function expression
const increment1 = function(n){
    return n + 1;
};

//Arrow function sempre é anônima
const increment2 = (n) =>  {
    return n + 1;
}

const increment3 = n =>  { //quando tem 1 único parametro pode se tirar os parênteses
    return n + 1;
}

const increment4 = n => n + 1; //return já está implícita, pois não há {} na função arrow


console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(24));
console.log(increment4(199));

const sum = (a, b) => a + b;

console.log(sum(3,8));