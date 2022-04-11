import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
})

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: { title: 'name of the uid'}
}

const docTwo: Resource<object> = {
  uid: 10,
  resourceName: ResourceType.PERSON,
  data: { name: 'toshi' }
}

console.log(docOne, docTwo)