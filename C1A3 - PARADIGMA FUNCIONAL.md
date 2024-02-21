PARADIGMA FUNCIONAL

First Class Functions => Funções de Primeira Classe 

Também conhecido como:
First Class Citizen => Cidadão de Primeira Classe

É o grau de importância em que a função exerce dentro a linguagem.
Funções são tratadas como valores

Higher Order Funcion => Função de Primeira Ordem

- Uma função consegue retornar uma função.
- Uma função consegue receber outra função como parâmetro.

FUNÇÕES SÃO VALORES

Declaração Simples:

  function dobro(x) {
    return x * 2
  }
  dobro(20)

* Function declaration => Declaração comum de funções

Função sendo valor:

  const dobro = function(x) {
    return x * 2
  }
  dobro(20)

* Function expression => Pega uma função anônima e atribui a uma
  determinada constante ou variável, e a partir daí, esta variável
  vai apontar para uma função conseguindo executar como uma função
  normal. Tendo isso, FUNÇÕES SÃO VALORES.

COMPOSIÇÃO DE FUNÇÕES

  const exagerado = composicao(
    gritar,       <== é uma função
    enfatizar,    <== é uma função
  )
  exagerado('PARA') <== exagerado() também é uma função

- O Centro do Paradigma Funcional são as Funções

Exemplo: Alunos aprovados

const alunos = [
  { nome: 'Ana', nota: 9.5 },
  { nome: 'Bia', nota: 7.3 },
  { nome: 'Gil', nota: 5.8 },
  { nome: 'Léo', nota: 7.6 },
  { nome: 'Gui', nota: 9.1 },
  { nome: 'Lia', nota: 4.9 },
  { nome: 'Rui', nota: 7.0 },
]

 * IMPERATIVO * 

  const aprovados = []
  for (let i = 0; i <alunos.length; i++) {
    if(alunos[i].nota >= 7) {
      aprovados.push(alunos[i])
    }
  }
  console.log(aprovados)

- Neste caso mesmo utilizando artifícios do paradigma Declarativo,
  podemos notar que ainda está muito descritivo o que estamos fazendo

 * DECLARATIVO * 

  const estaAprovado = aluno => aluno.nota >= 7

  const aprovados = alunos.filter(estaAprovado)
  console.log(aprovados)

- No paradigma declarativo podemos perceber como fica tudo mais limpo,
  mesmo você não sabendo como tudo funciona por baixo dos panos,
  é facilmente compreensível a leitura do código.

  IMUTABILIDADE

A grande culpada da adoção tardia foi a Memória.
A Programação Funcional foi inventada em 1957,
antes da Programação estruturada, antes da O.O.
A memória era muito cara para que fosse viável aderi-la.

VALOR VS REFERÊNCIA
                   _________________________ 
int a = 2;         | int a | int b | int c |
int b = a;         |-------|-------|-------|
int c;             |   2   |   2   |   0   |
                   |_______|_______|_______|
                   
- Quando é atribuido uma variável b que recebe o valor da variável a
  é duplicado o valor de a para a variável b, caso eu alterar a variável
  b, não vai interferir na variável a.

Object a = new Object();              .__________.
                                      | Object a |
                                      |----------|
                                      |  Ox5fe7  |
                                      |__________|

  Quando é criado um Objeto a, eu não tenho o conteúdo armazenado na variável
  mas sim o endereço de memória que está alocado o meu Objeto.
  Por conta disso, se eu atribuir o Objeto a, para a variável b, ele estará
  referenciando o endereço de memória em que eu instanciei o Objeto, contanto
  todas as alterações que forem feitas no Objeto a, serão vistas também pelo
  Objeto b, pois os dois estão apontando para o mesmo lugar.

  A vantagem da referência é o consumo reduzido de memória.
  A desvantagem é que se tiver muitas variáveis apontando para o mesmo
  endereço, a chance desses dados serem bagunçados é imensamente maior.
  Se os dados forem constantes, imutaveis, eu posso alterar aquele dado
  sem problema nenhum, sem ter o risco de estar afetando em outro local.

  Vamos pensar em um hotel com 50 quartos, imagine que cada quarto é uma suíte
  em que possui seu próprio banheiro.
  A chance de cada banheiro permanecer limpo é grande se cada hóspede cuidar
  de limpar seu próprio espaço.
  Agora vamos supor que vc está em um hostel, em que todos os quartos compartilham do mesmo
  banheiro, você vai ter 50 quartos, apontando para o mesmo Objeto banheiro, pode
  ser que você precise utilizar o banheiro, e esse banheiro já está ocupado por outro
  hospede, e pode ser que você seja afetado pelo mal comportamento de outro hospede,
  sendo que você está tentando mante-lo organizado, diminuindo drasticamente as chances
  de manter o banheiro limpo.

  Rich Hickey criador da linguagem Clojure (roda em cima da maquina do java)
é uma linguagem funcional.

Rich fez uma crítica a O.O. chamada:

PLOP
* Place-Oriented Programming => Programação Orientada a Lugar
* Novas informações substituem as antigas
* Isso só surgiu de uma limitação do início da computação, falta de memória, pouca RAM e pouco Disco;

- Hoje a memória não é um problema:
1940 -   1 Bit
1953 -   1 Byte
1966 -   1 Kb
1978 -  32 Kb
2011 - 100 Terabytes

Isso não quer dizer que você vai criar de forma deliberada um programa
que consome mais memória.
Você tem que se preocupar com que o código seja performático.
Mas é muito importante priorizar para um código melhor escrito.
Na maioria das vezes esse consumo a mais vale o sacrifício para 
maior entendimento do código em futuras manutenções e no reuso de funções.
Como dissemos anteriormente:
O maior gargalo nos projetos reais, não é necessariamente um problema de desempenho
da programação funcional, mas sim um problema de código mal escrito.

POR QUE MUDAR?

- Programação funcional é mais simples
- Torna mais fácil escrever e manter códigos
- Prioriza funções que tenham uma única responsabilidade
- Isso faz com que o reuso seja muito maior
- Não possui aclopamento temporal
- Poucos problemas de concorrência
- Menos problemas de concorrência de dados
- Trabalha com imutabilidade

Declare guerra a atribuição
Pode esquecer tudo, menos:
 - mutabilidade isolada
 - imutbilidade compartilhada

 Imutabilidade é basilar dentro do paradigma funcional
 Você só pode ter mutabilidade dentro de um espaço controlado
 em que você saiba exatamente aquilo que está modificando.

 No cenário atual com a memória abundante, conseguimos eliminar essa
 prática de referenciar Objetos apenas para economizar memoria.
 Se esse processo de referenciar fosse tão bom, não aconteceria com
 os tipo primitivos.
 Essa solução de apontar só foi criada por conta de uma limitação tecnológica da época

 Programação Funcional e Multi-Core

 AssertEquals(f(x), f(x));

 se f(x) é funcional, não importa se está
 executando em dois processadores diferentes
 o resultado será sempre o mesmo.