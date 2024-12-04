const person = {
  firstName: 'John',
  lastName: '500',
  age: 26,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
    lat: 12.34,
    long: 123.45,
  },
};

const personOnlyRead = {
   firstName: 'John',
   lastName: '500',
   age: 26,
   address: {
     street: '123 Main St',
     city: 'Anytown',
     state: 'CA',
     zip: '12345',
     lat: 12.34,
     long: 123.45,
   },
} as const;
console.log('<--------------- JK 02-object --------------->');
// personOnlyRead.age = 'asasa';
console.log( personOnlyRead);

const personClone = structuredClone(person);
console.log('<--------------- JK 02-object --------------->');
console.log( personClone);