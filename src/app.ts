// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 25,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spend ${amount}`);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log(`hello ${person.name}`);
}

greetPerson(me)

console.log(me);

import { Invoice } from './classes/invoice.js'

const invOne = new Invoice('mario', 'work on thw mario website', 350)
const invTwo = new Invoice('luigi', 'work on thw luigi website', 450)

let invoices: Invoice[] = [];
// invoices.push({ name: 'shaun' })
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
  // inv.client = 'something else'
  console.log(inv.client, inv.amount, inv.format());
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  );
})