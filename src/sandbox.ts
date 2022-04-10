let greet: Function;

// greet = 'hello'

greet = () => {
  console.log('hello Pedro');
}

const add = (a: number, b: number, c: number|string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 18, '20')

const minus = (a: number, b: number): number => {
  return a + b
}

let result = minus(10, 7)
// result = 'some string'