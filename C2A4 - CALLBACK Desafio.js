const subtrairNoTerminal = (a,b) => console.log( a - b )

function somarNoTerminal(a,b) {
  console.log( a + b )
}

function exec(fn, a, b) {
  fn(a,b)
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)