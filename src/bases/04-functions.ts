/**
 * greetPerson
 */
function greetPerson( name: string ) {
   return `Hello ${name}`;
}
const greetPersonArrow = (name: string) => `Hello ${name}`;

console.log('<--------------- JK 04-functions --------------->');
console.log(greetPerson('John'));
console.log(greetPersonArrow('Javiko'));

const getUser = ( id: string ) => ({
   id,
   name: 'abc-123',
   age: 12,
   email: 'abc@gmail.com',
});

console.log('<--------------- JK 04-functions --------------->');
console.log(getUser( '134565432' ));

const heroes = [
   { 
      id: 1, 
      name: 'Batman', 
   },
   { 
      id: 2, 
      name: 'Superman', 
      power: 'flight',
   },
   { 
      id: 3, 
      name: 'Spider-man', 
      power: 'web-slinging',
   },
];

const hero = heroes.find( hero => hero.id === 2 );

console.log(hero);
