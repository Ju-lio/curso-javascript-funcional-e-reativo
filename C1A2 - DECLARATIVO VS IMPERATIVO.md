** DECLARATIVO VS IMPERATIVO **

Declarativo => Não diz o como, diz o quê.
Imperativo  => Instruciona exatamente o que deve fazer.

Programação funcional é Declarativa

_______________________________________________________________________
|            Imperativo            |            Declarativo           |
|__________________________________|__________________________________|
| Foco no fluxo                    | Foco na lógica                   |
| Estados mutáveis (modificáveis)  | Imutabilidade (NÃO modificáveis) |
| Como                             | O quê                            |
| Maior quantidade de código       | Menor quantidade de código       |
| Baixo nível de escalabilidade ?? | Alto nível de escalabilidade     |
| Mais conhecido                   | Menos conhecido                  |
| Mais explícito                   | Menos explícito                  |
|__________________________________|__________________________________|

Escalabilidade de software significa que um sistema está pronto para crescer.
Isto é, o sistema consegue suportar novos usuários e alto armazenamento de dados,
sem afetar a estrutura do software.

O maior gargalo nos projetos reais, não é necessariamente um problema de desempenho
da programação funcional, mas sim um problema de código mal escrito. Nisto o padrão
Imperativo é inferior ao padrão Declarativo.

 * PARADIGMA IMPERATIVO *                 * Observe esses códigos em JavaScript

const notas = [8.7, 6.8, 7.7 7.7, 9.2, 5.3, 8.0]

function media(notas) {
  let total = 0
  for(let i = 0; i < notas.length; i++) {
    total += notas[i]
  }
  return total / notas.length
}
const mediaTurma = media(notas)
console.log(`Média: ${mediaTurma}`)

 Vemos aqui uma função Imperaviva
- Extremamente detalhado.
- Programamos cada passo feito.

 * PARADIGMA DECLARATIVO *

const notas = [8.7, 6.8, 7.7 7.7, 9.2, 5.3, 8.0]

const somar = (a ,b) => a + b
const dividir = (a, b) => a / b 

const mediaTurma = dividir(
  notas.reduce(somar),
  notas.length
)
console.log(`Média: ${mediaTurma}`)

- Observe que em nenhum momento foi feito um laço
- Nem precisou declarar uma variável para acumular os valores
- Código mais curto, de fácil leitura

Outros exemplos de funções Declarativas

* SQL
  SELECT 
    matricula, nome, email, media
  FROM
    alunos
  WHERE
    media >= 9

* HTML
  <div class="featured-content">
    <div class="row">
      <div class="page-title">
        <h1 class="nomargin shadow">{{ $title }}</h1>
      </div>
    </div>  
  </div>    

- Não nos interessa como ele seleciona os dados.
- Não nos interessa o COMO, mas sim O QUÊ ele trouxe.