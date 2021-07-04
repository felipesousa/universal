---
title: "JavaScript Async - Callbacks"
date: "2020-08-17"
description: "Tratar padrões assíncronos fazem parte do dia a dia, seja por um timer, leitura de um arquivo ou uma request, etc, em algum momento você vai precisar manipular esses dados e é bem importante saber como trabalhar com eles e qual estratégia é melhor para cada um dos casos que possam acontecer."
categories: [code, javascript, async]
comments: true
type: "posts"
---

Tratar padrões assíncronos fazem parte do dia a dia, seja por um timer, leitura de um arquivo ou uma request, etc, em algum momento você vai precisar manipular esses dados e é bem importante saber como trabalhar com eles e qual estratégia é melhor para cada um dos casos que possam acontecer.

Esse post é o primeiro de uma série de 3 para explicar como trabalhar com dados assíncronos em JavaScript. Nesse artigo focarei nas Callbacks e como podemos utilizá-las, quais as regras e alguns exemplos para vermos na prática como ele funciona.

_Caso tenha dúvidas sobre o que são funções assíncronas, como funcionam e/ou porque elas existem, [recomendo a leitura desse artigo](https://www.luiztools.com.br/post/entendendo-o-nodejs-event-loop/) que explica bem sobre como funcionam as chamadas e as funções dentro do JavaScript._

# Callbacks

Também conhecidos como a forma mais antiga de tratar dados assíncronos, as callbacks nos permite injetar uma função dentro de uma execução assíncrona para que possamos controlar o(s) resultado(s) quando eles estiverem disponíveis. De uma forma bem indireta é como se nós enviassemos um "espião" que vai nos informar quando algo acontecer dentro da chamada que estamos executando.

Criaremos um exemplo simples para começar, uma função que retorna um `new Date()`:

```javascript
function getNewDate() {
  return new Date()
}

const result = getNewDate()

console.log(result)
```

Nesse caso, guardamos o valor de resultado na variável _result_, imprimimos na tela e tudo funciona como esperado, mas, se por acaso essa informação estiver dentro de uma chamada a um endpoint, timer ou alguma outra execução que não seja imediata, o que acontece?

Vamos simular o mesmo caso, porém agora a função `getNewDate` somente vai retorna o valor após 4 segundos:

```javascript
function getNewDate() {
  setTimeout(function () {
    return new Date()
  }, 4000)
}

const result = getNewDate()

console.log(result) // undefined
```

Quando executado, recebemos **undefined** como resultado da variável _result_. Isso acontece porque o valor retornado pela função `getNewDate` é executado 4 segundos depois e, nossa variável `result` espera o valor em momento de execução, ou seja, temos que tratar esse valor **SOMENTE** quando ele estiver disponível, caso contrário não poderemos manipular ou guardar esse valor.

A solução para esse caso é bem simples, vamos passar uma função que está fora do escopo de execução da função `getNewDate` para receber o valor real que queremos manipular, nesse caso o `new Date()`.

```javascript
function getNewDate(callback) {
  setTimeout(function () {
    callback(new Date())
  }, 4000)
}

function getPayload(payload) {
  console.log(`The date is: ${payload}`)
}

getNewDate(getPayload)
```

Para manipular o dado resultado da função `getNewDate`, criei uma função chamada `getPayload`, essa é enviada como parâmetro para nossa função principal que ao invés de retornar o valor como antes, agora executa a função callback passando como parâmetro o resultado, assim a função `getPayload` é executada _somente_ quando o valor está disponível para ser capturado, simulando uma "espera" dentro da execução. A função `getPayload` por sua vez apenas recebe o _payload_ que contém o resultado da execução e imprime na tela: 🥳.

As callbacks são apenas o ponto de partida, no próximo artigo dessa série vamos ver como trabalhar usando Promises que além de uma melhor interface possui uma gama de API's para manipularmos melhor nossos casos assíncronos.

Nos vemos no próximo!

🐊
