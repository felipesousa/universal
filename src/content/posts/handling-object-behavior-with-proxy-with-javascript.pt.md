---
title: "Manipulando comportamento de objetos com Proxy no JavaScript"
date: "2020-09-12"
category: posts
lang: pt
---

Objetos em Javascript por padrão possuem seus métodos para manipulação e análise porém, imagine poder mudar o comportamento padrão de um Objeto para lhe prover um tratamento melhor sobre o que você procura fazer e/ou limitar para um usuário/processo dentro do seu desenvolvimento, com uma API liberada na versão ES2015 é possível fazer isso e de maneira bem simples: estamos falando da API de **Proxies**.

## O que são Proxies?

Um Proxy na sua íntegra funciona como um interceptor para manipular comportamento de objetos no JavaScript, logo, você pode modificar os métodos e assignações que podem acontecer dentro de um objeto e, somente "1" objeto, não se permite assignação múltipla para vários **_targets_** de uma só vez.

```jsx
const handlers = {}; // handlers/traps to intercept object behavior.
const target = { name: "example", id: 1 }; // object target to intercept

const myFirstProxy = new Proxy(target, handlers); // Proxy definition
```

Um Proxy possibilitam alterar os métodos <**handlers** ou **traps**> de um específico objeto, dessa forma para criar um novo Proxy é necessário passar esses 2 parâmetros (_target, handlers_).

- **target**: Objeto que estamos buscando alterar, nesse nosso caso é a variável **_target_**.
- **handlers**: Objeto que aceita hooks que são disparados de acordo com a interação com objeto, interação no sentido de adicionar uma _key nova,_ alterar um valor, deletar um valor, consultar API's internas do objeto, etc. [Focaremos nas principais para os nossos casos de exemplo, em caso de interesse em conhecer mais clique nesse link para ver a lista completa de todas as opções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

## Targets

No momento a criação do nosso Proxy é importante lembrar que estamos fazendo uma cópia de algum outro objeto - ou função - esse parâmetro é apenas onde vamos extrair a cópia, todas as alterações devem ser atribuidas a uma nova variável que vai ter todos os comportamentos alterados, o target se mantém original.

## Handlers ou _Traps_

O constructor Proxy recebe um segundo parâmetro, sendo um objeto com uma lista de intercepts prontos para uma manipulação particular, vejamos alguns exemplos de alguns casos interessantes de uso até mesmo de validações de objetos.

### Get

Imaginemos o caso simples de aplicação de um Proxy, vamos interceptar a consulta de um valor dentro de um objeto que possue { _name, age_ } como propriedades, nesse caso sempre que consultado um elemento do meu objeto, eu irei interceptar com meu método **get** e já implementar o seguinte padrão: "timestamp: **TIMESTAMP**: **PROPRETY_VALUE**". Observe que a função recebe 2 parâmetros: **target** e **prop,** sendo o objeto que estamos alterando e a propriedade que estamos consultando no momento da chamada, respectivamente.

Dentro da execução do método, é importante retornar o valor que deve ser enviado como retorno da chamada, no final do arquivo executo um `console.log` consultando a propriedade **name** e **age.**

```jsx
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

Vejamos o resultado para certificar o valor sendo retornado com outro padrão pelo nosso interceptor.

![Example Interceptor](/images/posts:proxies-examples.gif)

Observe também que dentro dos consoles, estou apontando para a minha variável **proxy**, isso acontece porque estamos registrando a alteração dos métodos e **assignando** o modelo de um target para ele replicar, caso acessar o elemento original ele ainda vai manter todo seu escopo e comportamento padrão.

### Set

Set como você já deve ter imaginado é o interceptor chamado quando definimos uma nova chave dentro do nosso objeto, essa por sua vez aceita um parâmetro mais, sendo esse o **valor** que está sendo assignado para aquela nova propriedade:

```jsx
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

Assim como no método **get**, é necessário retornar um valor da execução, nesse caso é importante lembrar que estamos fazendo uma assignação de valor, logo o retorno tem de ser o novo elemento com o valor que queremos assignar, onde no exemplo acima estou assignando "value: **VALOR**".

A lista de interceptions é bem extensa, podendo ser adicionada dentro de vários momentos, em constutores, deletar, checar propriedades, etc, etc. [A lista completa se pode conferir aqui com muitos exemplos e casos de uso interessantes.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) A lógica de funcionamento é sempre a mesma, mudando somente a resposta ou a interação o que precisa se retornado/executada.

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

```jsx
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

```jsx
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

Essa implementação é super simples, dentro do método **\*set**,\* vamos alterar apenas a condicional que verifica se a variável **_propName_** foi declarada com letra maiúscula:

```jsx
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

Como se trata de uma validação em momento de alteração de valor, usaremos novamente o método **_set_** para verificar se a propriedade existe da nossa variável **_baseProps_** e se o valor que vai ser assignado é do tipo **_string_.**

```jsx
set: function (target, propName, value) {
  let baseProps = Object.keys(baseObject);

  if (baseProps.includes(propName) && typeof value === 'string') {
    return target[propName] = value;
  } else {
    throw new Error(`The ${propName} property should receive a string as a value.`);
  }

  if (propName.toUpperCase() === propName && typeof value !== 'boolean') {
    return target[propName] = value;
  } else {
    throw new TypeError('new props should be set in uppercase and not accept boolean values.');
  }
},
```

Pronto, agora já temos nossas regras de validação implementada, nosso código final ficou assim:

```jsx
const baseObject = {
  name: "felipe",
  age: 22,
  role: "developer",
};

const handlers = {
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
