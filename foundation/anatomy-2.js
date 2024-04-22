//Anonymous Function
(function(a,b,c){
    return a + b + c;
}) //precisa ter os ()

//Function expression

const x = 1;
const sum = function (a, b){
    return a + b;
} //atribuir uma função anônima a uma variável

const result = sum(7,59);
console.log(result);

const anotherSum = sum;
console.log(anotherSum(5,9));

x = 3;
console.log(x);

x=sum;
console.log(x(11,16));