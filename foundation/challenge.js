//Create a range function
function range(a, b, c){
    let n1 = b === undefined ? 1 : a;
    let n2 = b === undefined ? a : b;
    const aux = c === undefined ? 1 : c;
    let aux2 = 0;
    
    if(n1 > n2){
        aux2 = n1;
        n1 = n2;
        n2 = aux2;

    }

   const nums = [];
   for(let i = n1; i <= n2; i+=aux){

    nums.push(i);
   }
   return nums;
}

//range(5) ->[1, 2, 3, 4, 5]
console.log(range(5));
//range(6,11) -> [6, 7, 8, 9, 10, 11]
console.log(range(6,11));
//range(10,19,2) -> [10, 12, 14, 16, 18]
console.log(range(10,19,2));
//range(6,2) -> [6, 5, 4, 3, 2]
console.log(range(6,2));
//range(8, -3, 4) -> [8, 4, 0]

