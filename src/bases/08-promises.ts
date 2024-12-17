// console.log('<--------------- JK 08-promises --------------->');
// console.log('init');

import { getHeroById } from "./06-imp-exp";
import { Hero } from "./data/heroes";

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve('resolved');
//         reject('rejected');
//     }, 1000);
// }).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('finally');
// });
// console.log('end');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const hero = getHeroById(id);
         return hero ? resolve(hero) : reject('No hero found');
      }, 1000);
   });
}

getHeroByIdAsync(10).then((hero) => {
   console.log(hero);
}).catch((error) => {
   console.log(error);
});