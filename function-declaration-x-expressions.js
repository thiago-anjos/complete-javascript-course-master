// we have two ways to create functions in javascript
// 1. function declaration
// function declaration we can call it before it is declared
// this process is called hoisting

const shitzu = myDog.bind(this, 'shitzu');
console.log(shitzu(2, 'white'));
const doberman = myDog.bind(this, 'doberman');
console.log(doberman(3, 'black'));

function myDog(race, age, color){
    return `My dog is ${race}, ${age} years old and has ${color} color`;
};

// 2. function expression
// function expression we only can call it after it is declared

const myCat = function(name, age, color){
    return `My cat is ${name}, ${age} years old and has ${color} color`;
}

const persian = myCat.bind(this, 'persian');
console.log(persian(2, 'black'));

const siamese = myCat.bind(this, 'siamese');
console.log(siamese(2, 'black'));


const ford = myCar.bind(this, 'ford');
console.log(ford('focus', 2010));

const myCar = function(brand, model, year){
    return `My car is ${brand}, ${model} and was made in ${year}`;
}




