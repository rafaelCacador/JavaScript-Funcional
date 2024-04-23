//Anonymous Function
//IIFE - Immeadiately Invoked Function Expression
(function(a,b,c){
    console.log(`Result ${a + b + c}`); 
})(1,2,3);

//como chamar a função anônima? ??? (1,2,3)
//é necessário usar o IIFE quando se precisa garantir que alguns valores 
//fiquem dentro de um escopo mais restrito, como uma função


(function(a,b,c){
    let x = 3;
    console.log(`Result ${a + b + c}`); 
})(1,2,3);

//console.log(x); //definida dentro na função, log teria que ser dentro


(function(){
    let x = 300;
    console.log(x); 
})();


(() => {
    console.log("Arrow"); 
})();