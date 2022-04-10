// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'
age = 39;
// isLoggedIn = 25
isLoggedIn = true;
//arrays
var ninjas = [];
// ninjas = ['yoshi', 'mario']
ninjas.push('shaun');
// union type
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects
var ninja1;
ninja1 = { name: 'yoshi', age: 20 };
var ninja2;
ninja2 = {
    name: 'mario',
    age: 44,
    beltColor: 'black'
};
console.log(ninja2);
