//Exercici 3

//PART 1
num > 0 ? console.log("El número és positiu") : num < 0 ? console.log("El número és negatiu") : console.log("El número és zero");

//PART 2
function trobarMaxim(a, b, c) {
  return a > b && a > c
    ? console.log(`${a} és el número més gran`)
    : b > a && b > c
    ? console.log(`${b} és el número més gran`)
    : console.log(`${c} és el número més gran`);
}
