** B�SICO SOBRE FUN��ES **

JavaScript � multiparadigma:
- Procedural
- Orientado a Objeto
- Funcional

Possibilidades do paradigma funcional:
- Armazenar uma fun��o dentro de uma vari�vel.
- Passar uma fun��o como par�metro para outra fun��o.

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

  