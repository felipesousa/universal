---
title: "JavaScript Async - Promises"
date: "2020-08-27"
description: "Esse post é o segundo de uma série de 3 posts para explicar e mostrar como trabalhar com dados assíncronos em JavaScript. As Promises - ou Promesas - são uma implementação nativa do JavaScript para tratar de maneira mais elegante e simples dados que são assíncronos."
categories: [code, javascript, async]
comments: true
type: "posts"
---

Esse post é o segundo de uma série de 3 posts para explicar e mostrar como trabalhar com dados assíncronos em JavaScript.

Nesse artigo focarei nas Promises e como podemos utilizá-las, quais as regras e alguns exemplos para vermos na prática como elas funcionam.

_Caso não tenha conferido o primeiro artigo dessa série sobre JS Async onde falo sobre callbacks e como elas funcionam [basta acessar aqui.](https://www.felipesousa.space/posts/pt/javascript-async-callbacks)_

# O que são Promises?

As Promises - _ou Promesas_ - são uma implementação nativa do JavaScript para tratar de maneira mais elegante e simples dados que são assíncronos.

Assim como promessas do mundo real, as promessas dentro do JavaScript podem ou não acontecer, de maneira técnica podemos dizer que temos controle do momento de _sucesso_ e _erro_ dos fluxos que estamos tratando, porém você pode pensar, _"mas eu também já tenho essa possibilidade de tratamento dentro das callbacks"_, e sim você pode tratar seus erros usando callbacks também, porém imagine poder compor, tratar valores em formas de pipes e ainda por cima tratar os erros de forma mais elegante e literalmente mais declarativa, isso é só um pouco do que as Promises podem fazer.

## Criando uma Promise

As Promises possuem 2 passos: **criação** e **consumo**. Vejamos um exemplo básico para criar uma nova promessa:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  // do something
  if (true) {
    // ...
    resolve() // resolving the promise;
  } else {
    reject() // rejecting the promise;
  }
})
```

Aqui estamos criando uma nova instância de classe Promise que recebe uma função como parâmetro, esta função aceita 2 métodos: `resolve` e `reject`, o método **resolve** que é responsável por capturar o valor de sucesso e **reject** que captura o erro se ele existir.

Agora vamos criar uma nova função que retorna um fake payload em 5 segundos e adotá-la usando os conceitos de Promises:

```javascript
function handlerPromise(resolve, reject) {
  setTimeout(function () {
    let data = { name: "felipe" }
    resolve(data)
  }, 5000)
}

const myPromise = new Promise(handlerPromise)
```

<br />

A função `handlerPromise` chama o método `resolve` após 5 segundos exportando a variável `data` como o valor para a promise.

## Consumindo uma Promise

Para capturar os valores de sucesso de uma promessa usamos o método `.then`, esse pode receber até 2 funções como parâmetros, sendo a primeira a que captura o resultado exportado pelo métodos **resolve** e a segunda captura os erros exportados pelo método **reject**. Logo, não somente para dados casos de sucesso mas opcionalmente o método `.then` também pode tratar os dados de erro.

```javascript
myPromise.then(
  function (payload) {
    console.log(`My name is ${payload.name}.`)
  },
  function (error) {
    console.log("oooppps, something wrong happen.")
  }
)
```

Experimente mudar a função `handlerPromise` chamando **reject** ao invés de **resolve** e assim poderá ver como funciona os casos de erro.

Uma forma alternativa para a captura do erro na execução de uma promessa é usar o método `.catch`, esse por sua vez aceita uma função que recebe o erro disparado como parâmetro:

```javascript
myPromise.catch(function (error) {
  console.log("ooops, something went wrong")
})
```

Algo importante e super prático quando se trabalha com promessas é que o método `.then` quando retorna algum valor, esse valor também é uma promessa, o que significa que você pode encadear vários `.then` para tratar os valores em formato de pipelines.

Imaginemos o mesmo exemplo anterior porém agora em cada passo de execução temos que modificar payload inicial:

```javascript
myPromise
  .then(function (payload) {
    return { ...payload, age: 22 }
  })
  .then(function (payload) {
    return { ...payload, role: "developer" }
  })
  .then(function (payload) {
    console.log(payload)
    // { name: 'felipe', age: 22, role: 'developer' }
  })
  .catch(function (error) {
    console.log(error)
  })
```

Dentro do nosso primeiro `.then` estou adicionando a propriedade **age**, no segundo a propriedade **role** dentro do payload original, já o nosso terceiro pipeline recebe o payload alterado de acordo com os pipes anteriores. É importante lembrar que **apenas** o `.then` continua o fluxo depois de um `return`, o `.catch` depois de executado finaliza o processo.

Além dos pipelines para tratar casos de sucesso e erro, as promessas também possuem um método que é sempre executado, até mesmo depois de um erro, esse método é o `.finally`, também recebe uma função como parâmetro e pode ser usado em alguns casos interessantes para evitar duplicidade de código, executar uma função ou disparar um evento que remove um loading da tela de um usuário, por exemplo.

```javascript
myPromise
  .then(...)
  .catch(...)
  .finally(function () {
    // always executed
  })
```

<br />

## Composição

As Promises também possuem 2 métodos que nos ajudam a trabalhar com processos assíncronos em paralelo, são eles `Promise.all()` e `Promise.race()`. Ambas as funções recebem um array de itens e funcionam da seguinte forma:

- **Promise.all()**: Retorna uma promise com o array de resultados depois de todos os iteráveis da lista estarem completados. Retorna um erro caso algum dos itens seja rejeitado/falhe.

- **Promise.race()**: Retorna uma promise quando o primeiro iterável for resolvido/rejeitado.

Nos exemplos abaixo vamos utilizar 2 promessas similares, uma executada em `200ms` e outra em `400ms`, como resultado trazem **"200"** e **"400"** respectivamente.

```javascript
const first = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("200")
  }, 200)
})

const second = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("400")
  }, 400)
})
```

<br />

Exemplo de como funciona o **_Promise.all()_**:

```javascript
Promise.all([first, second]).then(function (payload) {
  console.log(payload) // ['200', '400'];
})
```

<br />

Exemplo de como funciona o **_Promise.race()_**:

```javascript
Promise.race([first, second]).then(function (payload) {
  console.log(payload) // '200';
})
```

Com esse tipo de funcionalidade, alguns manejos que antes necessitariam de umas tantas linhas de código, pode ser encapsulado dentro de uns poucos pipelines.

Importante lembrar que antes mesmos das Promises serem implementadas nativamente dentro do JavaScript, algumas bibliotecas tais como [q.JS](https://github.com/kriskowal/q) e [when.JS](https://github.com/cujojs/when) já vinha com esse conceito de similiaridade e aplicabilidade.

Muito obrigado pela leitura, no próximo post dessa série eu irei falar sobre como trabalhar com processos assíncronos usando _async/await_!

Espero que tenha gostado do conteúdo, nos vemos no próximo!

🦐
