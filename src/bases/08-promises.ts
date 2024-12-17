console.log('<--------------- JK 08-promises --------------->');
console.log('init');

new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve('resolved');
        reject('rejected');
    }, 1000);
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});
console.log('end');