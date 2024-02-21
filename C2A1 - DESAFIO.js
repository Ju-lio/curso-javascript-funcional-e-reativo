// 1) somar(3)(4)(5)

// 2) calcular(3)(7)(fn)

// EXERCICIO 1

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(somar(1)(2)(3))

// Podemos também criar funções que já atribuem alguns valores:

const somarAB = somar(3)(5)

console.log(somarAB(7))

// EXERCICIO 2

// FUNÇÕES
const sum = function (a,b) {
  return a + b
}
const subtract = function (a,b) {
  return a - b
}
const multiply = function (a,b) {
  return a * b
}
const divide = function (a,b) {
  return a / b
}

// RESULTADO

function calc(a) {
  return function (b) {
    return function (fn) {
      return fn(a,b)
    }
  }
}

console.log(
  calc(5)(7)(subtract)
)
