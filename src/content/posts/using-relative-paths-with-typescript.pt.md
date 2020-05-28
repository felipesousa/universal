---
title: "Usando relative paths com TypeScript"
date: "2020-03-20"
category: posts
lang: pt
---

Diante da quantidade de funcionalidades que vemos recebendo dentro das linguagens de programação, consigo também "atualizamos" as responsabilidades de buscar novas formas de melhorar, automatizar, limpar e criar boas práticas para que tenhamos uma aplicação além de melhor, mais escalável e consistente.

No mundo onde modularizar e distribuir traços de código virou padrão ([não podemos esquecer do famoso caso da biblioteca de 11 linhas que causou um problema consideravelmente grande!](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)), naturalmente vamos ter momentos onde teremos uma cadeia de `imports` seja de dependência ou de importação local grande demais, o que não consideravelmente é algo negativo, mas o problema começa quando pensamos em algo comum: refatorar.

## Introdução

Imaginemos um caso de uso onde temos uma árvore de código simples similar a essa:

```text
- src/
  - config/
    - constants.ts
  - components/
    - hello.ts
  - services/
    - service.ts
  - screens/
    - home/
      - home.screen.ts
- tsconfig.json
```

O arquivo `src/screens/home/home.screen.ts` têm o seguinte código:

```typescript
import Hello from '../../components/hello';
import Service from '../../services/service';
import config from '../../config/constants';

class HomeScreen ...
```

Nada de novo e sem novidades, porém observando mais atenciosamente os `paths` das linhas 1, 2 e 3, estamos importando os arquivos de forma bastante manual, em caso de movermos um arquivo, ou uma pasta inteira para outro ponto da aplicação, teremos que manualmente importar cada arquivo, hoje não é um problema, mas imagine ter uma aplicação grande, com bastante arquivos, dependências... Ordenar um possível refactor seria no mínimo cansativo e pior ainda, estressante.

### Existe solução?

Muitas soluções, desde auto-imports, plugins para identificar export/import, integrações para VSCode, Vim, etc. Porém são ferramentas adicionais e que dependem de um editor para funcionar, a ideia não é automatizar somente, mas sim, resolver o problema de escrever ou saber exatamente o caminho exato para um arquivo.

Para solucionar esse problema, vamos apenas adicionar 2 propriedades dentro do nosso arquivo `tsconfig.json`:

```json
    "moduleResolution": "node",
    "baseUrl": "./src/"
```

A propriedade `moduleResolution` é como vamos definir a estratégia de importação, onde nesse caso, os possíveis valores são: `node` ou `classic` sendo esse, o valor default. Quando com valor `node` as importações vão seguir o modelo `base/relative`, modelo comumente conhecido quando estamos importando algo que existe dentro da pasta `node_modules`, onde não necessitamos definir definir o `node_modules/module` e sim apenas o nome do modulo, sendo esse base o diretório que você define dentro da propriedade `baseUrl`, que define a pasta onde vão partir as importações.

No nosso caso, o valor de `baseUrl` foi configurado definir nossa pasta `src/` logo, toda importação que você fizer dentro da aplicação, deve tomar conta que você vai estar fazendo referência desde a pasta `./src/` e não mais dentro do real path do arquivo que você está editando. Vejamos o mesmo exemplo do código de `home.screen.ts` para entender melhor:

```typescript
import Hello from 'components/hello';
import Service from 'services/service';
import config from 'config/constants';

class HomeScreen ...
```

Para cada arquivo que você importa, o compiler do typescript vai assignar o path escrito como o valor `relativo` do real path, assim completando o modelo comentado antes `base/relative`, onde o base é tomado dentro do `baseUrl` em momento de compilação. Assim apenas conseguimos resolver problema de importação sem mais ter que se preocupar se você assignou o arquivo certo, ou não esqueceu uma sequência de `../`durante as importações.

Até a próxima! 😁
