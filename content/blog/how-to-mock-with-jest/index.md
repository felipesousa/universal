---
title: "Como usar mocks com Jest - parte 1"
date: "2021-08-12"
description: "Jest é um framework pra testes em Javascript e possui diversas funcionalidades interessantes que nos ajudam a criar testes mais eficazes e simples de trabalhar, uma dessas features são os 'mocks' que nos permitem simular respostas e/ou comportamentos de métodos, módulos, requisições, etc."
categories: [code, javascript, mocks, tests]
comments: true
type: "posts"
---

Jest é um framework pra testes em Javascript e possui diversas funcionalidades interessantes que nos ajudam a criar testes mais eficazes e simples de trabalhar, uma dessas features são os 'mocks' que nos permitem simular respostas e/ou comportamentos de métodos, módulos, requisições, etc.

### O que são mocks?

Os testes como o próprio nome já diz, procura simular o comportamento de determinada atividade (seja função, módulo, serviço, componente, etc) para garantir que o comportamento esperado está implementando de maneira correta, os mocks são simuladores controlados para simular o uso de dependências ou funcionalidades dentro do objeto de testes; Em resumo podemos dizer que os mocks são interceptadores de respostas onde podemos simular manualmente tarefas para cobrir todos os nossos casos de testes.

### Quando utilizá-los?

A forma como podemos determinar a necessidade de mockar dados aparece naturalmente dentro do desenvolvimento dos testes, vejamos 2 exemplos para contextualizar:

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

#### Exemplo n.2 - Uma função para retornar um número aleatório:

```javascript
// getNumber.js
const utils = require("./utils")

export function getNumber() {
  const number = utils.getRandomNumber()
  return `the random number is ${number}.`
}
```

<br />

Agora analisando as duas funções - vamos relevar o fato de as funções fazerem atividades distintas - uma das principais diferenças **são o uso das dependências na função**: o exemplo n.1 possui dependências que são declaradas como parâmetros no momento da execução, já o exemplo n.2 possui dependência com o módulo local `utils` que não é declarado dentro do mesmo contexto - e sim, fora - o que cria uma dependência externa na nossa função e onde basicamente se observa a necessidade de **mockar** dados.

Agora vejamos o que resulta em caso de criarmos um teste para o exemplo n.2:

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

o resultado da execução dispara um erro por conta do módulo `utils` que não foi encontrado:

<br />

<div class="image-container">
  <img src="/images/mock-test-error.png" alt="mock test error" />
</div>

Isso significa que precisamos criar essas funções para serem executadas dentro do nossos testes e para isso é necessário criar os nossos mocks!

### Como criar e utilizar os mocks?

> O processo de instalação do Jest e como você pode implementar dentro da sua aplicação está muito bem documentado dentro da [página inicial do projeto](https://jestjs.io), nesse post focarei principalmente na configurações dos mocks para fins de facilitar a explicação.

Existem diversas, realmente diversas formas de criar mocks dentro do Jest, algumas delas supre a necessidade de utilizar outras, nos posts focarei nas principais para os diferentes tipos de situações que podemos encontrar dentro do dia a dia de testes.

#### Criando nosso primeiro mock

Os mocks utilizam uma api do Jest chamada `mock` para serem criados, essa aceita função pode aceitar até 2 parâmetros, o primero e único obrigatório em alguns casos é o **path**: esse é caminho de onde está o módulo que vamos simular (importante lembrar que o caminho têm que ser relativo ao caminho importado dentro do objeto de testes que estamos trabalhando), o segundo é um **callback**: uma função que retorna o resultado que esperamos quando executarmos o nosso teste, vejamos o seguinte exemplo:

```javascript
const { getNumber } from "./getNumber";

jest.mock("./utils", () => ({
  getRandomNumber: () => 66
}))

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

O que aconteceu é que agora quando o nosso teste executar nossa função e quando essa utilizar o módulo `utils` que está sendo importado do arquivo `./utils`, nossos mocks vão `subscrever` o resultado pelo que declaramos dentro da nossa função `jest.mock`. O que significa que SEMPRE que executarmos a função `utils.getRandomName` dentro do nosso teste, independemente da implementação original o valor retornado vai ser 66.

Esse post cobre o conceito básico e o modelo mais simples de mocks que podemos encontrar dentro do dia a dia, outros modelos e mais exemplos serão explorados e publicados dentro dos próximos posts sobre testes e mocks.

Obrigado pela leitura!
