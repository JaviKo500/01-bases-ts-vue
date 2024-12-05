import heroes, { type Owner, owners, type Hero } from "./data/heroes";

console.log('<--------------- JK 06-imp-exp --------------->');
console.log(owners, heroes);

export const getHeroById = (id: number): Hero => {
   const hero = heroes.find(hero => hero.id === id);
   if (!hero) {
      throw new Error(`No hero found with id ${id}`);
   }
   return hero;
}

console.log('<--------------- JK 06-imp-exp --------------->');
console.log(getHeroById(1));

export const getHeroesByOwner = (owner: Owner) => {
   const heroesOwner = heroes.filter(hero => hero.owner.toLowerCase() === owner.toLowerCase());
   if (heroes.length === 0) {
      throw new Error(`No heroes found with owner ${owner}`);
   }
   return heroesOwner;
   
}

console.log('<--------------- JK 06-imp-exp --------------->');
console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));