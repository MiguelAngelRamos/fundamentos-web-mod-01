let numero1 = 10;
let numero2 = 15;
let resultado;
let calculoAdicional;
let calculoAdicional2;

//* resultado = numero1 + numero2;
resultado = sumar(numero1, numero2);
console.log("El resultado es: " + resultado)

//* calculoAdicional = numero1 + numero2 - 30;
calculoAdicional = sumar(numero1, numero2) - 30;
console.log(calculoAdicional)
//* calculoAdicional2 = (numero1 + numero2) /2;
calculoAdicional2 = (sumar(numero1, numero2)) /2
console.log(calculoAdicional2)

// declaro la funcion
function sumar(elemento1, elemento2) {
  return elemento1 + elemento2;
}

// invocar la funcion
console.log(sumar(numero1, numero2));
