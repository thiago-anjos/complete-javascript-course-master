// Expression or Function declaration

function howOldAreYou(birthyear){
    const age = getFullYear() - birthyear;
    // this exists in a function declaration
    console.log("this", this);
    return age;
}

const getFullYear = () =>{
    const dateNow = new Date()
    return dateNow.getFullYear();
}

const age = howOldAreYou(1986);
console.log(age);

// arrow function simple example
const add = (a, b) => {
    // this does not exist in an arrow function
    // this is the global object
    console.log("this", this);
    return a + b;
}

const sum = add(2, 3);
console.log(sum);
