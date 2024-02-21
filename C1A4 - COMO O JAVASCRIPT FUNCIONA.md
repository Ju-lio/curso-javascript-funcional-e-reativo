COMO O JAVASCRIPT FUNCIONA?

 - JavaScript é single thread. Faz um processo por vez.

Então, como JS funciona de forma sincrona?

 No JS temos a chamada pilha de execução (Stack),
 
 *1 ao chamar uma função Func1, nossa Stack é abastecida na Posição 1 a Func1.
 *2 Func1 chama a Func2 que chama a Func3
 *3 Func3 terminou sua execução
 *4 Func2 chama a Func4
 *5 E assim vai até que a pilha termine e todas as funções sejam executadas

*1             *2             *3            *4            *5           
.-----------.  .-----------.  .-----------. .-----------. .-----------.
|   STACK   |  |   STACK   |  |   STACK   | |   STACK   | |   STACK   |
|-----------|  |-----------|  |-----------| |-----------| |-----------|
|           |  |   Func3   |  |           | |   Func4   | |           |
|           |  |   Func2   |  |   Func2   | |   Func2   | |           |
|   Func1   |  |   Func1   |  |   Func1   | |   Func1   | |           |
|___________|  |___________|  |___________| |___________| |___________|

Se uma posição da Stack demorar 10 segundos para executar, todo o resto da pilha ficará 10 segundos esperando que seja executado o seu antecessor.

SINCRONISMO & EVENT QUEUE
 
 Existe um cara chamado Event Queue que é nossa fila de execução. Vamos supor que a Func1 chamou um SetTimeOut de 20 segundos, quando isso aconteceu foi adicionado um evento na nossa Event Queue, dizendo que vai aguardar 20 segundos para executar a função descrita.
 A Func2 também chamou um SetTimeOut, porém com 10 segundos e com isso foi adicionado logo a cima em nossa Event Queue.
 Uma observação importante é que a Event Queue só vai ser executada após a Stack estar livre.
 Assim que a Stack terminar todas as suas pendências a Event Queue será acionada, voltando a adicionar na Stack as funções que ficaram aguardando na fila.
 Mesmo que a Func1_20s tenha sido acionada antes da Func2_10s, a Func2_10s será adicionada na stack primeiro, por conta de que ela vai aguardar 10 segundos, enquanto a Func1_20s vai aguardar 20 segundos.
 Um detalhe importante é que A EVENT QUEUE É SÍNCRONA E TUDO ESTÁ SENDO "CRONOMETRADO" AO MESMO TEMPO! Sendo assim a Func1_20s será adicionada na stack apenas 10 segundos após a Func2_10s.
   
.-----------.   .--------------------.              .---------------. 
|   STACK   |   |     EVENT QUEUE    |  while(True) |     STACK     | 
|-----------|   |--------------------|  eventLoop   |---------------| 
|   Func3   |   |                    |<==()         |               | 
|   Func2   |   |     Func2_10s      |              |   Func1_20s   | 
|   Func1   |   |     Func1_20s      |              |   Func2_10s   | 
|___________|   |____________________|              |_______________| 

 Quando você usa um framework ou qualquer outra biblioteca que faz com que seu programa fique sempre ativo, como por exemplo o Express JS, sempre terá alguma coisa no Event Queue esperando uma requisição. Fica-se registrado na fila de execução e quando a requisição chegar, a Stack é alimentada. Então será muito comum não ter nada sendo executado na Stack, embora tenham varios Listeners na Event Queue escutando as eventuais requisições recebidas na aplicação.
 Com tudo isso, temos que entender que no JavaScript temos apenas UMA linha de execução, apenas uma coisa será executada por vez na Stack.
 Por isso a Stack deve sempre estar alimentada com coisas rápidas, se precisar realizar algo demorado ou que precise aguardar, é adicionado na Event Queue.
 
 DETALHES IMPORTANTES

  Observe o código a seguir:

  function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro) {
      // Fique parado aguardando...
    }
  }

  setTimeout(() => console.log('Exec #01'), 3000)

  esperarPor(5000)
  console.log('Fim')

  Retorno:

  Fim
  Exec #01
   
  Tempo da execução = 5.074 segundos

  Neste exemplo, o programa esperou por 5 segundos e retornou "Fim" e na sequência "Exec #01".
  Por que o "Exec #01" não foi executado 3 segundos depois?
  Podemos observar que antes de chamar a função esperarPor(), adicionamos um setTimeout de 3 segundos na nossa Event Queue que já estava sendo cronometrado quando foi acionado.A função esperarPor() ficou segurando a execução na Stack por 5 segundos, quando a pilha ficou vazia, o setTimeout() que estava na Event Queue já tinha terminado de esperar os 3 segundos e foi adicionado na nossa Stack.
  Se caso colocarmos o esperarPor() antes do setTimeout, o programa vai esperar 5 segundos e só depois vai adicionar o setTimeout na fila de eventos, fazendo com que o programa exiba "Fim" depois de 5 segundos e "Exec #01" depois de 3 segundos, totalizando uma execução de 8 segundos.