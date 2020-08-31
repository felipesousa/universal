---
title: "JS Async: async/await"
date: "2020-08-31"
category: posts
lang: pt
---

Esse post é o ultimo da série sobre JS Async, 3 posts para explicar e mostrar como trabalhar com dados assíncronos em JavaScript.

Você pode conferir os outros 2 artigos anteriores:

- <a href="https://www.felipesousa.space/posts/pt/javascript-async-promises" target="_blank">JS Async: Promises</a>
- <a href="https://www.felipesousa.space/posts/pt/javascript-async-callbacks" target="_blank">JS Async: Callbacks</a>

Hoje falaremos sobre o async/await e veremos alguns exemplos de como e o que podemos fazer com ele:

## Async

A keyword _async_ foi implementada na versão ES2017. Ela possibilita criarmos funções naturalmente assíncronas utilizando a seguinte notação:

```javascript
async function myAsyncFunction() {}
```

Algo importante e ainda mais interessante acerca dessa implementação é que toda `async` function retorna uma <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a>, significando que podemos utilizar todas as interfaces que já conhecemos no <a href="https://www.felipesousa.space/posts/pt/javascript-async-promises" target="_blank">artigo sobre promises</a>. Vejamos um exemplo para entender melhor:

```javascript
async function myAsyncFunction() {
  return "Hello!";
}

myAsyncFunction().then(payload => {
  console.log(payload); // Hello!
});
```

As funções `async` utilizam os valores de sucesso como os valores que vão ser dispostos dentro do pipeline `.then` na promise que vai ser retornada, em caso de necessitar exportar um erro, é necessário disparar um erro dentro do escopo de execução para ser enviado para o pipeline `.catch`, vejamos um exemplo:

```javascript
async function myAsyncFunctionWithError() {
  throw "something wrong happen";
}

myAsyncFunctionWithError().catch(error => {
  console.log(error); // something wrong happen
});
```

## Await

O uso do `await` é restrito apenas dentro de uma função declarada com a keyword _async_, basicamente o que ele faz é esperar o valor resposta de uma Promise ou converte o valor em uma Promise resolvida.

```javascript
async function myAsyncFunction() {
  const payload = await { name: "felipe", age: 22 };
  console.log(payload); // { name: 'felipe', age: 22 }
}

myAsyncFunction();
```

Nos casos onde não estamos retornando nenhum valor da nossa função, a chamada de execução se mantém como as chamadas de funções normais sem o uso do `.then`.

## Capturando erros com try/catch

O `await` sempre espera o valor de sucesso da promise, logo não temos como capturar o erro diretamente, para fazer isso temos que fazer uso do `try/catch` que recebe o valor de reject se caso aconteça, dentro das promises que estão sendo executadas dentro do bloco `try`:

```javascript
async function myAsyncErrorFunction() {
  throw "ops, something wrong happen";
}

async function myAsyncFunction() {
  try {
    const response = await myAsyncErrorFunction();
  } catch (error) {
    console.log(error); // ops, something wrong happen
  }
}

myAsyncFunction();
```

Executando esse bloco, o erro acontece dentro da promise `myAsyncErrorFunction` e é capturada dentro do bloco `catch` do try/catch.

Em resumo, o uso em conjunto das implementações fazem com que nosso código seja extremamente mais simples e legível, fazendo com que tratar dados assíncronos (ou síncronos) seja de forma mais direta e eficaz.

Espero que tenha gostado dessa pequena série, nos vemos nos próximo post!

🔭
