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