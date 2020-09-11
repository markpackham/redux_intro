import { compsoe, pipe } from "lodash/fp";

let input = "   PHP   ";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));

console.log(transform(input));

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "Boston",
  },
};
// const updated = Object.assign({}, person, { name: "Bob", age: 30 });
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "Hope",
  },
  name: "Billy",
};
updated.address.city = "Lincoln";
console.log(person);

const numbers = [1, 2, 3];
// Adding
const index = numbers.indexOf(3);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);

// Removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

// Updating
const updatedNums = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updatedNums);
