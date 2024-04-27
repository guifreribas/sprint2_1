//Exercici 3
const objecte1 = {
  id: 1,
  nom: "Guifré",
  edat: 41,
};

const objecte2 = { ...objecte1 };
objecte2.nom = "Pere";

console.log({ objecte1, objecte2 }); //node bloc1_4/exercici3.js
