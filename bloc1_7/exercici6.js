//Exercici 6
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 1 resolta en 1 segon!");
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 2 resolta en 3 segons!");
  }, 3000);
});

const promiseAllArray = [promise1, promise2];
Promise.all(promiseAllArray).then((responseAll) => console.log(responseAll));
