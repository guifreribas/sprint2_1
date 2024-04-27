//Exercici 2
function calculadora(a, b, callback) {
  return callback(a, b);
}

function suma(a, b) {
  return a + b;
}

calculadora(4, 5, suma);
