"use strict";
let greet;
// greet = 'hello'
greet = () => {
    console.log('hello Pedro');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 18, '20');
const minus = (a, b) => {
    return a + b + 3;
};
let result = minus(10, 7);
console.log(result);
// result = 'some string'
