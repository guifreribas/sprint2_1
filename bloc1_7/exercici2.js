//Exercici 2
const respostaDeLaPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola mon");
  }, 2000);
});

respostaDeLaPromesa.then((resposta) => console.log(resposta));
