---
layout: post
title: Controle de Versão GIT - Parte 1
excerpt: "Aprenda conceitos básicos sobre GIT. Um dos melhores controladores de versão da atualidade."
modified: 2015-01-17
tags: [aulas, git]
comments: true
image:
  feature: gitpost.jpg
---


Bem, visto que é super importante o uso de Controle de Versões em projetos para organizá-lo de forma mais correta, ver a evolução do projeto com o tempo, etc. Resolvi falar um pouco sobre GIT, um dos Sistemas de Controle de Versão que vem se destacando pela sua facilidade e eficiência em vários ambientes, seja trabalhando individualmente ou em grupo, GIT sempre auxilia da forma mais simples, ajudando no processo, organização e progresso do projeto.

O artigo vai ser dividido em duas partes. A primeira sendo como trabalhar com GIT em um projeto individual, e o outro em um projeto coletivo. 

> Git é um sistema de controle de versão distribuído e um sistema de gerenciamento de código fonte, com ênfase em velocidade. O Git foi inicialmente projetado e desenvolvido por Linus Torvalds para o desenvolvimento do kernel Linux, mas foi adotado por muitos outros projetos. 

### Instalar GIT

Antes de começar, é necessário instalar o GIT na sua máquina, (você pode baixar clicando aqui)[http://git-scm.com/downloads], após o download realize a instalação, após isso já estamos com tudo pronto para iniciar com Git.

### Começando com o GIT

Dependendo do seu SO, o GIT pode ser encontrado no caso de Linux e MAC no própio terminal de ambos, bastando executar os comandos a partir do mesmo, já no Windows, vem um programa que simula um terminal, e será por ele que você pode iniciar os comandos. Estou usando Linux, no meu caso, os comandos serão executados a partir do meu terminal.

**A partir de agora todos os exemplos serão executados no terminal.**

Primeiro temos que realizar 2 configurações básicas no GIT. Insira no seu terminal *ou programa* o seguinte comando. 

`$ git config --global user.name "your_username"`, onde `your_username`, você deve substituir pelo seu nome. Depois de ter configurado seu nome, adicione o comando `$ git config --global user.email youremail@example.com`, e edite o `youremail@example.com` pelo seu email, após feito isso, podemos começar de vez a versionar nossos projetos, *uffa*.

Vamos supor que eu vou começar o projeto no caminho `Documentos/teste/` que quero começar a controlar as versões dele, para isso, basta executar o comando `git init` dentro do diretório.

> git init - iniciar o versionamento pelo git.

Esse comando vai criar uma pasta `.git` no seu diretório. 




