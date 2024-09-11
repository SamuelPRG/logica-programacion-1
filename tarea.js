const prompt = require('prompt-sync')();

function ordenarNumeros() {

  let num1 = parseInt(prompt("Ingrese el primer número:"));
  let num2 = parseInt(prompt("Ingrese el segundo número:"));
  let num3 = parseInt(prompt("Ingrese el tercer número:"));

  let mayor = Math.max(num1, num2, num3);

  let menor = Math.min(num1, num2, num3);

  let centro;
  if (num1 !== mayor && num1 !== menor) {
    centro = num1;
  } else if (num2 !== mayor && num2 !== menor) {
    centro = num2;
  } else {
    centro = num3;
  }

  console.log("Números ordenados de mayor a menor:");
  console.log(mayor, centro, menor);
  console.log("Números ordenados de menor a mayor:");
  console.log(menor, centro, mayor);


  if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
  }
}

console.log(ordenarNumeros());