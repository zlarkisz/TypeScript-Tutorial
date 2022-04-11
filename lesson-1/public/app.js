import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
// const invOne = new Invoice('mario', 'work on thw mario website', 350)
// const invTwo = new Invoice('luigi', 'work on thw luigi website', 450)
// let invoices: Invoice[] = [];
// // invoices.push({ name: 'shaun' })
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//   // inv.client = 'something else'
//   console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
