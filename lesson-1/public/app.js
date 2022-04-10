"use strict";
//classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on thw mario website', 350);
const invTwo = new Invoice('luigi', 'work on thw luigi website', 450);
let invoices = [];
// invoices.push({ name: 'shaun' })
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // inv.client = 'something else'
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
