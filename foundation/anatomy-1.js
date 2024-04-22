//Function declaration

function sayHello() {
    console.log("Hello");

}

sayHello();

function sayHalloTo(name){
    console.log("Hello" + name);
    console.log(`Hello ${name}`);
}

sayHalloTo("Mike");
sayHello();

function returnHi(){
    return "Hi!";
}

const greeting = returnHi();
console.log(greeting);
console.log(returnHi());

function returnHiTo(name){
    return `Hi ${name}!`;
}

console.log(returnHiTo("John"));