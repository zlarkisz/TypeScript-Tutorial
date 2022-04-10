"use strict";
// let greet: Function;
//example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// exaple 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} in ${ninja.age} years old`);
};
