//Exercici 5
const resposta = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola mon");
  }, 2000);
});

async function asynFunc() {
  try {
    const result = await resposta;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
