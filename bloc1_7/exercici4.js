//Exercici 4
const resposta = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola mon");
  }, 2000);
});

async function asynFunc() {
  const result = await resposta;
  console.log(result);
}
