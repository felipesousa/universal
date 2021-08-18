---
title: "Como usar mocks com Jest"
date: "2021-08-12"
description: "Jest é um framework pra testes em Javascript e possui diversas funcionalidades interessantes que nos ajudam a criar testes mais eficazes e simples de trabalhar, uma dessas features são os mocks que nos permitem simular respostas e/ou comportamentos de métodos, módulos, requisições, etc."
categories: [code, javascript, mocks, tests]
comments: true
type: "posts"
---

Jest é um framework pra testes em Javascript e possui diversas funcionalidades interessantes que nos ajudam a criar testes mais eficazes e simples de trabalhar, uma dessas features são os mocks que nos permitem simular respostas e/ou comportamentos de métodos, módulos, requisições, etc.

### O que são mocks?

Os mocks são interceptors controlados para simular o uso de dependências ou funcionalidades dentro do objeto de testes (uma função, component, api global, etc);

### Quando utilizá-los?

A forma como podemos determinar a necessidade de utilizar mocks antes mesmo de criar um teste pode ser definida quando observamos a dependências que são necessárias para executar nosso objeto de testes.

Vejamos os proximos 2 exemplos para ilustrar melhor o que quero dizer:

#### Exemplo n.1 - Uma função para retornar os elementos únicos de um Array:

```javascript
// unique.js
export function unique(elements = []) {
  return Array.from(
    elements.reduce(
      (all, current) => (all.has(current) ? all : all.add(current)),
      new Set()
    )
  )
}
```

A função ocupa elementos que são criados dentro do próprio escopo ou aceito como parâmetros - como no caso da variável `elements` -, em casos como esse, testar a função fica muito mais simples pois temos tudo o que precisamos dentro da própria função.

Vejamos agora outro caso onde estamos utilizando um módulo local mas que não faz parte do mesmo escopo:

#### Exemplo n.2 - Uma função para retornar um número aleatório:

```javascript
// getNumber.js
const utils = require("./utils")

export function getNumber() {
  const value = utils.getRandomNumber()
  return `the random number is ${value}.`
}
```

<br />

Como podemos observar, a variável `value` utiliza o método `getRandomNumber` do módulo `utils` que é externo ao escopo de execução do nossa função, vejamos o que acontece quando executamos a função dentro de um cenário de teste simples:


```javascript
// getNumber.test.js
import { getNumber } from "./getNumber.js"

describe("Functions::GetNumber", () => {
  test("should call successfully", () => {
    expect(getNumber()).toContain("the random number")
  })
})
```

<br />

O resultado da execução do teste retorna o seguinte:
<br />

<div class="image-container">
  <img src="/images/mock-test-error.png" alt="mock test error" />
</div>

O teste informa que não foi possível encontrar o método `getRandomNumber` de `undefined` e dispara um erro, nesse caso o módulo `undefined` deveria estar importando o módulo **utils** que estamos importando dentro do nosso arquivo `getNumber.js`, porém, dentro da execução dos nossos testes o processo de importação de módulos externos (por mais que sejam módulos locais) **não acontecem de modo automático e é necessário *simular* o resultado dessas importações manualmente**, em casos como esse os mocks são nossos melhores amigos.

### Como criar e utilizar os mocks?

> O processo de instalação do Jest e como você pode implementar dentro da sua aplicação está muito bem documentado dentro da [página inicial do projeto](https://jestjs.io), nesse post focarei principalmente na configurações dos mocks para fins de facilitar a explicação.

#### Criando nosso primeiro mock

Pois bem, seguiremos com o problema do exemplo anterior, como podemos solucionar o problema de importação do módulo *utils* dentro nosso teste?

Para resolver esse problema precisamos voltar nosso arquivo `./getNumber.js` novamente, mais especificamente vamos procurar o caminho de onde estamos importando o módulo *utils* onde nesse caso é `./utils`. Com esse caminho vamos voltar dentro do nosso teste e adicionar o seguinte:

```javascript
jest.mock("./utils", function() {
  return {
    getRandomNumber: () => 66,
  }
})
```

O que estamos fazendo com essa sentença é declarando um mock que vai ***subscrever*** a importação do módulo que está no caminho *./utils* dentro do objeto de testes. O módulo `mock` do jest aceita 2 parâmetros básicos; O primeiro sendo o **caminho** que vamos subscrever dentro da execução do testes, O segundo é uma função que **deve retornar a mesma API que temos dentro do nosso módulo original**, nesse caso, estamos retornando a função `getRandomNumber` como uma função que retorna o valor 66 sempre.

Dessa forma podemos subscrever o valor de *utils* dentro do nosso teste e executar sem problemas:

```javascript
const { getNumber } from "./getNumber";

jest.mock("./utils", function() {
  return {
    getRandomNumber: () => 66
  }
})

describe("Functions::GetNumber", () => {
  test("should return the number 66", () => {
    expect(getNumber()).toEqual("the random number is 66.")
  })
})

```

<br />

O teste agora quando executado funciona como o esperado:
<br />

<div class="image-container">
  <img src="/images/mock-test-success.png" alt="mock test success" />
</div>

<br />


#### Retornando valores diferentes em cada execução

Imaginamos agora que fazemos uma pequena modificação dentro da nossa função `getNumber`, agora vamos executar a função 2x e retornar os valores dentro da mesma resposta, vejamos os seguinte:

```javascript
const utils = require("./utils")

export function getNumber() {
  const value = utils.getRandomNumber()
  const value2 = utils.getRandomNumber()
  return `your random numbers are ${value} and ${value2}`
}
```

Como dito anteriormente, o valor sempre vai ser 66 quando executarmos a função `getRandomNumber` porém, se quisermos ou necessitarmos receber valores diferentes seria possível? e se é possível como seria?

Bom, por sorte existe uma API do Jest muito importante e poderosa que extende ainda mais o poder dos mocks.

##### JEST.FN()

O módulo `fn` nos permite ter controles de funções, execuções, parâmetros e forçar comportamentos para que possamos simular nossos testes de maneira necessária; Para a solução do problema em questão vamos utilizar a função `mockImplementationOnce` porém vale a pena a investigação e o experimento para conhecer mais sobre o poder dos mocks e como eles podem lhe ajudar em casos adversos. [Conferir api completa do jest.fn().](https://jestjs.io/docs/mock-function-api)


a função `mockImplementationOnce` cria um retorno que vai ser utilizado apenas uma vez, o que nos ajuda no caso que estamos procurando testar, vejamos o que precisamos fazer:

```javascript
import {getNumber} from "./getNumber";

jest.mock("./utils", function() {
  return {    
    getRandomNumber: jest.fn()
      .mockImplementationOnce(() => "21")
      .mockImplementationOnce(() => "57"),
  }
})

describe("Functions::GetNumber", () => {
  test("should return the number 21 and 57", () => {
    expect(getNumber()).toEqual("your random numbers are 21 and 57")
  })
})

```

Agora quando a função `getNumber` chamar a função `getRandomNumber` nas duas vezes, os mocks vão retornar valores distintos em cada uma das chamadas:


<div class="image-container">
  <img src="/images/mock-test-success-final.png" alt="mock test success using mockimplemetationonce method" />
</div>

<br />


---

Esse post cobre os conceitos básicos e exemplos práticos de como podemos testar nosso código com os recursos que o Jest oferece, dentro de outros artigos vamos explorar mais sobre outros casos onde os mocks são essenciais.

Obrigado por ter acompanhado o post, espero que tenha gostado!

🪂

