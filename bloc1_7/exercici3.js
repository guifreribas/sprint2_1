//Exercici 3
function checkInput(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "Hola") {
        resolve("Resolved!!!");
      } else {
        reject("Rejected!!!");
      }
    }, 2000);
  });
}
