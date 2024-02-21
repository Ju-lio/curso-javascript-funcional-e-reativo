** BÁSICO SOBRE FUNÇÕES **

JavaScript é multiparadigma:
- Procedural
- Orientado a Objeto
- Funcional

Possibilidades do paradigma funcional:
- Armazenar uma função dentro de uma variável.
- Passar uma função como parâmetro para outra função.

FUNCTION DECLARATION

  function helloWorld() {
    console.log('Hello World!')
  }

FUNCTION EXPRESSION

  const helloWorld = function () {
    console.log('Hello World!')
  }
  helloWorld()

  function executarAlgo(fn) {
    fn()
  }

  