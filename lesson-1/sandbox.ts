// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'
age = 39

// isLoggedIn = 25
isLoggedIn = true

//arrays
let ninjas: string[] = [];

// ninjas = ['yoshi', 'mario']
ninjas.push('shaun')

// union type
let mixed: (string|number|boolean)[] = [];
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed);

let uid: string|number;
uid = '123'
uid = 123

// objects
let ninja1: object;
ninja1 = { name: 'yoshi', age: 20 }

let ninja2: {
  name: string,
  age: number,
  beltColor: string
}

ninja2 = {
  name: 'mario',
  age: 44,
  beltColor: 'black'
}

console.log(ninja2);