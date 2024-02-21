const helloWorld = () => console.log('Hello world!')

helloWorld()

function power(base) {
  return function(exponent) {
    return Math.pow(base, exponent)
  }
}

const pow = base => exponent => Math.pow(base, exponent)