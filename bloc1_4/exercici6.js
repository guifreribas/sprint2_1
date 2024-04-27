//Exercici 6
const objecteA = {
  id: 1,
  nom: "Guifré",
  edat: 41,
};
const objecteB = {
  direccio: "Carrer Major, 12",
  ciutat: "Barcelona",
  estudis: "Developer",
};
const objecteC = { ...objecteA, ...objecteB };
