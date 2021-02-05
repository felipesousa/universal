---
title: "Manipulando comportamento de objetos com Proxy no JavaScript"
date: "2020-09-12"
category: posts
lang: pt
draft: true
---

Objetos em Javascript por padrão possuem seus métodos para manipulação e consulta já definidos, porém imagine poder mudar o comportamento padrão de um Objeto para lhe prover um tratamento melhor sobre o que você procura fazer e/ou limitar para um usuário/processo dentro do seu desenvolvimento, com uma API liberada na versão ES2015 é possível fazer isso e de maneira bem simples, estamos falando da API de **Proxies**.

## O que são Proxies?

Um Proxy na sua íntegra funciona como um interceptor para manipular comportamento de objetos no JavaScript, logo, você pode modificar os métodos e assignações que podem acontecer dentro de um objeto.

```javascript
const target = { name: "example", id: 1 }; // object example
const handlers = {}; // handlers/traps to intercept object behavior.

const myFirstProxy = new Proxy(target, handlers); // Proxy definition
```

Um Proxy possibilita alterar os métodos <**handlers** ou **traps**> de um específico objeto <**target**>, dessa forma para criar um novo Proxy é necessário passar esses 2 parâmetros (_target, handlers_).

- **target**: Target que vamos usar como base para nosso Proxy.
- **handlers**: Conjunto de hooks que podem ser utilizados para interceptar ações ou comportamentos nativos do target.

## Targets

No momento da criação do nosso Proxy é importante lembrar que estamos fazendo uma cópia de algum outro target, esse é apenas onde vamos extrair o comportamento para criar uma cópia, todas as alterações devem ser atribuidas a uma nova variável que vai ter todos os comportamentos alterados, o target se mantém original.

## Handlers

Também conhecido como `traps`, o constructor Proxy recebe um segundo parâmetro, sendo um objeto com uma lista de intercepts prontos para uma manipulação particular. [A lista de todos os intercepts e para cada caso detalhadamente pode ser visto aqui.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)

Vejamos 2 exemplos de hooks para objetos, onde alteramos o comportamento de get e set:

### Get

Imaginemos o caso simples de aplicação de um Proxy, vamos interceptar a consulta de um valor dentro de um objeto que possue { _name, age_ } como propriedades, nesse caso sempre que consultado um elemento do meu objeto, eu irei interceptar com meu método **get** e já implementar o seguinte padrão: "timestamp: **TIMESTAMP**: **PROPRETY_VALUE**" como retorno. Observe que a função recebe 2 parâmetros: **target** e **prop,** sendo o objeto que estamos alterando e a propriedade que estamos consultando no momento da chamada, respectivamente.

Dentro da execução do método, é importante retornar o valor que deve ser enviado como retorno da chamada, no final do arquivo executo um `console.log` consultando a propriedade **name** e **age.**

```javascript
let myObject = {
  name: "propertyname",
  age: 22,
};

const proxy = new Proxy(myObject, {
  get: function (target, prop) {
    return `timestamp: ${Date.now()}: ${target[prop]}`;
  },
});

setInterval(function () {
  console.log("-----");
  console.log(proxy.name);
  console.log(proxy.age);
  console.log("-----");
}, 2000);
```

<br />

Vejamos o resultado para certificar o valor sendo retornado com outro padrão pelo nosso interceptor:

![Example Interceptor](/images/posts:proxies-examples.gif)

Observe também que dentro dos `console.log` estou apontando para a minha variável **proxy**, isso acontece porque estamos registrando a alteração dos métodos e **assignando** o modelo de um target para ele replicar, em caso de acessar o elemento original - `myObject` - ele ainda vai manter todo seu escopo e comportamento padrão.

### Set

Set como você já deve ter imaginado é o interceptor chamado quando definimos uma nova chave dentro do nosso objeto - ou quando atualizamos uma posição já existente -, essa por sua vez recebe um parâmetro a mais na sua chamada, sendo esse o **valor** que está sendo assignado para aquela nova propriedade:

```javascript
let myObject = {
  name: "propertyname",
  age: 22,
};

const proxy = new Proxy(myObject, {
  set: function (target, prop, value) {
    return (target[prop] = `value: ${value}`);
  },
});

proxy.nick = "pn";

console.log(proxy); // { name: 'propertyname', age: 22, nick: 'value: pn' }
```

Assim como no método **get**, é necessário retornar um valor da execução, nesse caso é importante lembrar que estamos fazendo uma assignação de valor, logo o retorno tem de ser o novo elemento com o valor que queremos assignar, onde no exemplo acima estou retornando o valor no padrão: "value: **VALOR**".

A lista de interceptions é bem extensa, cada uma focada para um momento específico de acesso ou modificação de um target. [A lista completa se pode conferir aqui com muitos exemplos e casos de uso interessantes.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) A lógica de funcionamento é sempre a mesma, mudando somente a resposta ou a interação o que precisa se retornado/executada.

## Validando inputs objects com Proxies

Criaremos um exemplo um pouco mais prático, validar e restringir ações dentro um Objeto utilizando alguns traps, vamos definir as regras base antes de começar a implementar:

### Regras de validação:

1. Todas as novas propriedades devem ser declaradas com letras maiúsculas.
2. As propriedades **name, age e role** não podem ser deletadas.
3. Nenhuma propriedade pode conter valores booleanos.
4. As propriedades **name, age e role** somente devem aceitar **strings** como tipos de dados.

Com as regras definidas, vamos criar as regras para cada um dos casos:

### 1. Todas as novas propriedades devem ser declaradas com letras maiúsculas:

A primeira regra é simples, façamos uma comparação da formatação do parâmentro **propName** dentro do interceptor **_set,_** caso contrário eu declaro um **_TypeError_** e encerro o processo. Observe as 2 ultimas linhas e as mensagens, em caso de criar uma nova propriedade com letras minúsculas, o TypeError é declarado e caso contrário, o fluxo segue normal.

```javascript
const baseObject = {
  name: "felipe",
  age: 22,
  role: "developer",
};

const handlers = {
  set: function (target, propName, value) {
    if (propName.toUpperCase() === propName) {
      return (target[propName] = value);
    } else {
      throw new TypeError("new props should be set in uppercase.");
    }
  },
};

const myObject = new Proxy(baseObject, handlers);

myObject.prop = "new prop"; // TypeError: new props should be set in uppercase.
myObject.PROP = "new prop"; // Successfully!
```

Validação implementada, vamos para o próximo caso:

### 2. As propriedades **name, age e work** não podem ser deletadas.

Para esse caso vamos usar o interceptor **_deleteProperty,_** que intercepta no momento que algum parâmetro é deletado.

```javascript
const baseObject = {
  name: "felipe",
  age: 22,
  role: "developer"
};

const handlers = {
  set: function (target, propName, value) {
    if (propName.toUpperCase() === propName) {
      return target[propName] = value;
    } else {
      throw new TypeError('new props should be set in uppercase.');
    }
  },
  deleteProperty: function (target, propName) {
    if (propName in target) {
      let baseProps = Object.keys(baseObject); // ['name', 'age', 'role']
      if (baseProps.includes(propName) {
          throw new Error(`The ${propName} property can't be deleted.`);
      } else {
        delete target[propName];
      }
    }
  }
};

const myObject = new Proxy(baseObject, handlers);

delete myObject.name; // Error: The name property can't be deleted.
delete myObject.age; // Error: The age property can't be deleted.

myObject.NEW_NAME = 'new name property';

delete myObject.NEW_NAME; // Successfully!
```

Note que dentro da execução, definimos os parâmetros base para nosso objeto, caso a prop exista dentro da nossa variável **_baseProps,_** disparo um novo erro com uma mensagem customizada.

Validação implementada, vamos para o próximo caso:

### 3. Nenhuma propriedade pode conter valores booleanos

Essa implementação é super simples, dentro do método **set** vamos alterar apenas a condicional que verifica se a variável **_propName_** foi declarada com letra maiúscula:

```javascript
set: function (target, propName, value) {
  if (propName.toUpperCase() === propName && typeof value !== 'boolean') {
    return target[propName] = value;
  } else {
    throw new TypeError('new props should be set in uppercase and not accept boolean values.');
  }
},
```

Agora, nosso objeto apenas aceita novas propriedades com letras maiúsculas e valores não booleanos.

Validação implementada, vamos para o último caso:

### 4. As propriedades **_name, age e role_** somente devem aceitar **strings** como tipos de dados.

Como se trata de uma validação em momento de alteração de valor, usaremos novamente o método **_set_** para verificar se a propriedade existe da nossa variável **_baseProps_** e se o valor que vai ser assignado é do tipo **_string_.** Observe que além agora temos uma condicional para verificar se a propriedade já existe dentro do nosso _target_, isso é importante pois usamos o mesmo interceptor para atualizar os valores já criados - que leva outra validação - e para valores novos, logo, cada um dos casos reflete em uma validação diferente.

```javascript
set: function (target, propName, value) {
  if (propName in target) {
    let baseProps = Object.keys(baseObject);

    if (baseProps.includes(propName) && typeof value === "string") {
      return (target[propName] = value);
    } else {
      throw new Error(
        `The ${propName} property should receive a string as a value.`
      );
    }
  } else {
    if (propName.toUpperCase() === propName && typeof value !== "boolean") {
      return (target[propName] = value);
    } else {
      throw new TypeError(
        "new props should be set in uppercase and not accept boolean values."
      );
    }
  }
},
```

Pronto, agora já temos nossas regras de validação implementada, nosso código final ficou assim:

```javascript
const baseObject = {
  name: "felipe",
  age: 22,
  role: "developer",
};

const handlers = {
  set: function (target, propName, value) {
    let baseProps = Object.keys(baseObject);

    if (propName in target) {
      if (baseProps.includes(propName) && typeof value === "string") {
        return (target[propName] = value);
      } else {
        throw new Error(
          `The ${propName} property should receive a string as a value.`
        );
      }
    } else {
      if (propName.toUpperCase() === propName && typeof value !== "boolean") {
        return (target[propName] = value);
      } else {
        throw new TypeError(
          "new props should be set in uppercase and not accept boolean values."
        );
      }
    }
  },
  deleteProperty: function (target, propName) {
    if (propName in target) {
      let baseProps = Object.keys(baseObject);

      if (!baseProps.includes(propName)) {
        delete target[propName];
      } else {
        throw new Error(`The ${propName} property can't be deleted.`);
      }
    }
  },
};

const proxy = new Proxy(baseObject, handlers);
```

## Conclusão

Proxies são ferramentas poderosas e podemos usufruir muito dela em diferentes pontos como podemos ver, desde validações ou construções de API's, essa implementação nos dá um poder interessante e ao mesmo tempo útil.

Espero que tenha gostado, até a próxima!

🎏
