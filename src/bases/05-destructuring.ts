export interface Hero {
   name: string;
   age: number;
   email: string;
   power?: string;
}

export interface CreateHeroArs {
   name: string;
   age: number;
   email: string;
   power?: string;
}
export const hero: Hero = {
   name: 'John',
   age: 30,
   email: 'john@gmail.com',
};

export const persons: Hero[] = [
   {
      name: 'John',
      age: 30,
      email: 'john@gmail.com',
   },
   {
      name: 'Jane',
      age: 25,
      email: 'jane@gmail.com',
   },
];

const { name, power = 'no power' } = hero;

const [firstPerson] = persons;

console.log(name);
console.log(firstPerson);
console.log(power);

const createHero = ( { name, age, email, power }: CreateHeroArs ) => ({
   name,
   age,
   email,
   power,
});

console.log(createHero({ name: 'John', age: 30, email: 'john@gmail.com' }));


const returnArray = () => {
   return [1, 2, 3, '4'] as const;
}

const [a, d] = returnArray();

console.log( a , d );