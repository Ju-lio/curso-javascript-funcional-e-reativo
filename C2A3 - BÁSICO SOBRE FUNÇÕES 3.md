**ARROW FUNCTION**

Arrow Function é uma função anônima, ou seja, não possui nome. Exemplo:

() => console.log('Hello world!')

Não é possível chamar uma função anônima novamente, a não ser que ela seja armazenada previamente:

```js
  const helloWorld = () => console.log('Hello world!')

  helloWorld()  
```
Resultado: Hello world!

*A sintaxe " function " é substituída por " => ".*

*Se nossa função tiver apenas uma única expressão, ela não necessita ter um corpo. O " => " já nos indica o retorno ao invés de utilizar " return ". Automaticamente o que vir após o " => " será o retorno*

```js
  (name) => 'Hey ' + name + ', whats up?
```

  É a mesma coisa que:

```js
  function (name) {
    return 'Hey ' + name + ', whats up?
  }
```

- *Se a minha função tiver um único parâmetro, não necessita de ter parênteses*

```js
  (name) => 'Hey ' + name + ', whats up?
```

É a mesma coisa que:

```js
  name => 'Hey ' + name + ', whats up?
```

Dica de uso com backtick:
```js
  name => `Hey ${name}, whats up?`
```

```js
  const sum = numbers => {
    let total = 0
    for(let n of numbers) {
      total += n
    }
    return total
  }

  console.log(sum([1,2,3,4,5,6,7,8,9,10]))
```
Resultado: 55

* Parâmetro Rest 
```js
  const sum = (...numbers) => {
    let total = 0
    for(let n of numbers) {
      total += n
    }
    return total
  }

  console.log(sum(1,2,3))
  console.log(sum(10,20,30,40,50))
  console.log(Array.isArray(numeros))
```
Resultado:
  6
  150
  True

ao utilizar Rest, temos um número de parâmetros ilimitados a serem passados, e tudo será adicionado num array automaticamente.

```js
  function power(base) {
    return function(exponent) {
      return Math.pow(base, exponent)
    }
  }
```
É a mesma coisa que:
```js
  pow = base => exponent => Math.pow(base, exponent)
```


**THIS**

```js
Array.prototype.log = function() {
  console.log('Opa eai véi blz?')
}

numeros.log()
```
Resultado: Opa eai véu blz?

```js
Array.prototype.ultimo = function() {
  console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
  console.log(this[0])
}

Array.prototype.primeiroAF => () {
  console.log(this[0]) // <-- NÃO FUNCIONA COM ARROW FUNCTION!
                       //     O THIS NÃO EXISTE!
}

numeros = [22,33,44,55,66]

numeros.ultimo()
numeros.primeiro()
numeros.primeiroAF()
```
Resultado:
  66
  22
  ERRO

Quando não tem nenhum parâmetro, colocamos um par de parênteses
  () => *--função--*

Quando temos um único parâmetro não precisamos de parênteses
  parametro => *--função--*

Quando temos mais de um parâmtros, precisamos colocar os parênteses
  (a, b) => *--função--*