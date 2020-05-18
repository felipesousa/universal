---
title: "Automatizando documentação para projetos TypeScript com Github e Typedoc"
date: "2020-03-21"
category: posts
lang: en
---

PENDING

"Automatizando" e "TypeScript" na mesma frase pode soar hype até demais, porém ambas não ganharam famas a toa, automatizar vem sendo cada vez mais buscado entre todas as camadas de produtos, desde um fluxo automatizado de envio de emails ou publicação de uma biblioteca no npm a partir de algum hook, etc. Independente do nível, automatizar _quase_ sempre vai ser uma ótima opção.

Nos últimos projetos que tenho trabalhado, optamos por usar TypeScript e tirar proveito o máximo que puder de acordo com o caso. Documentar projetos é um trabalho que posso confessar, é cansativo, e principalmente quando se trata de uma documentação de código, sim, aquela que você escreve pra outro dev entender - ou você mesmo em um futuro -. Obrigar alguém a ler seu código a partir de um editor é algo além de bem antigo, não tão funcional a nível de entendimento de código, o que atrapalha em possíveis bugs e/ou features.

### O que vamos fazer e o que vamos usar?

TypeScript + Typedoc + Github Actions + Github Pages = 🚀! É isso, vamos criar uma documentação automática com Typedoc, criaremos um pipeline com Github Actions e publicar automaticamente a documentação no GitHub Pages.

### Getting Starting

Vamos definir alguns steps de config inicial e instalação do projeto para termos uma base:

1.  criar um novo diretório e criar um `package.json`.
2.  iniciar um novo projeto TypeScript e definir as configurações iniciais.
3.  configurar Typedoc e `.gitignore`.
4.  configurar npm scripts.
5.  configurar pipelines do Github Actions.
6.  atualizar readme com o status dos pipelines e link da aplicação.

Publicarei o [código nesse link](https://github.com/felipesousa/typescript-docs), irei deixar os commits com cada step que temos acima para uma melhor consulta. 🧐

### 1 - Criar um novo diretório e criar um `package.json`.

```bash
$ mkdir typescript-docs && cd typescript-docs && npm init -y
```

### 2 - Iniciar um novo projeto TypeScript e definir as configurações iniciais.

Execute o comando para criar o arquivo de configuração inicial `tsconfig.json`.

```bash
$ npx tsc --init
```

Depois, necessitamos atualizar nosso arquivo `tsconfig.json` com a seguinte propriedade `outDir` para enviar o código compilado para a pasta `dist` na raiz do projeto, além de configurar os formato do modulo que vai ser gerado:

```json
"outDir": "./dist"
```

### 3 - Configurar Typedoc e `.gitignore`.

Para utilizar o [Typedoc](https://typedoc.org/) necessitamos fazer previamente sua instalação :

```bash
$ npm i --save-dev typedoc
```

Após a instalação, vamos executar o comando para gerar a documentação dos arquivos da pasta `./src/` e criar um diretório chamado `./docs`:

```bash
$ ./node_modules/typedoc/bin/typedoc --out docs src
```

Após isso adicionamos as pastas `dist` e `docs` no nosso `.gitignore`:

```text
dist/
docs/
node_modules/
```

### 4 - Configurar npm scripts.

Vamos adicionar algumas linhas mais dentro do nosso `package.json`:

```json
"scripts": {
	"dev": "tsc -w",
	"docs": "./node_modules/typedoc/bin/typedoc --out docs src"
}
```

Dessa forma, temos como executar de uma forma melhor o compiler de docs e do typescript.

### 5 - Configurar pipelines para Github Actions.

Esse artigo não tem um foco de explicar como funciona, regras, sobre o GitHub Actions, basicamente é uma infraestrutura de automatização e entrega, como os conhecidos Travis CI, Circle CI e muitos outros. [Para mais detalhes sobre Github Actions você pode ver aqui](https://github.com/features/actions).

Em resumo, vamos criar o arquivo de configuração para nosso(s) pipelines na pasta `.github/workflow/main.yml`:

```yaml
name: workflow

on:
  push:
    branches:
      - master

jobs:
  docs:
    name: Publish Docs to Github Pages
    runs-on: ubuntu-latest
    steps:
      - name: Action Checkout
        uses: actions/checkout@v1

      - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
          node-version: 10.x

      - name: Install Dependencies and Generating Documentation
        run: npm install && npm run docs

      - name: Publishing on Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./docs
```

De maneira geral estamos:

1.  Definindo o nome do nosso workflow.
2.  Definindo em qual ação <push> para qual branch <master>.
3.  Definindo um job chamado `Publish Docs to Github Pages` que tem 4 steps, sendo os 2 últimos os mais importantes, o terceiro que vai instalar e gerar a documentação e o quarto que utiliza uma "action" da store do Github actions. Note que a propriedade `publish_url` tem que ter o mesmo nome do seu output de documentação, que no nosso caso se chama `docs`.

- A Action `peaceiris/actions-gh-pages` necessita de uma configuração para permitir acesso para a branch `gh-pages` - que é onde vai ficar nossa documentação -. [Veja as instruções de instalação e configuração aqui.](https://github.com/peaceiris/actions-gh-pages#options).

Após a configuração da action de permissão acima, já podemos enviar nosso projeto para o GitHub.

```bash
$ git remote add origin <YOUR_REMOTE_URL> && git push origin master
```

Para acompanhar o processo do workflow, [você pode acessar a aba "Actions" dentro da repositório no Github](https://github.com/felipesousa/typescript-docs/actions).

### 6 - Atualizar readme com o status dos pipelines e link da documentação.

Vamos copiar o link do badge do pipeline para termos sempre o status atualizado dos nossos builds sem necessitar verificar os pipes. Dentro da aba de actions você pode gerar os badges para cada workflow que você tem, é só copiar e colar! 😁

Depois disso vamos criar um `readme.md` básico e colar nosso badge:

```markdown
### TypeScript Docs

> Projeto usado como exemplo no artigo sobre automatização de documentação para projetos typescript

![workflow](https://github.com/felipesousa/typescript-docs/workflows/workflow/badge.svg)
```

[Clique aqui para verificar](https://felipesousa.github.io/typescript-docs/modules/_index_.html) o resultado.

O processo de tudo é teoricamente simples, alguns steps e tudo funciona bem sem necessidade de reescrita, isso é só uma pontinha simples do que podemos fazer com integrações, Github actions, etc!

Até a próxima! 🏆
