---
layout: post
title: Básico em Markdown
excerpt: "Aprenda o básico em markdown."
modified: 2015-01-08
tags: [markdown, basico, jekyll]
comments: true
image:
  feature: sample-image-5.jpg
---


Neste artigo, mostrarei maneiras de adicionar coisas as suas postagens de forma simples e rápida. 
<hr>

### O que será abordado no artigo: 
* <a href='#bq'> Blockquotes </a>
* <a href='#tabelas'> Tabelas </a>
* <a href='#bc'> Blocos de Código </a>
* <a href='#marcadores'> Marcadores de texto </a>
* <a href='#td'> Texto em destaque </a>
* <a href='#imagens'>Imagens</a>
* <a href='#botoes'>Botões </a>

<br /> 
<hr > 


<h2 id='bq'> Blockquote </h2> 

Blockquotes é um trecho de código que fica dentro de um mini bloco. Para adicionar um blockquote basta simplesmente adicionar o simbolo `>` antes do trecho.

{% highlight text %}
> Exemplo de Blockquote, veja que o trecho se concentra em um pequeno bloco. 
{% endhighlight %}

#### Resultado:

> Exemplo de Blockquote, veja que o trecho se concentra em um pequeno bloco. 



<h2 id='tabelas'>Tabelas</h2> 

Tabelas são amplamente utilizadas e muitas das vezes chatas de se criar, so que ai vem a pergunta como criar uma tabela usando a própria sintaxe markdown? É bem simples, basta seguir uma lógica nada complexa. 
Vamos supor que eu precise criar uma tabela simples com os seguintes campos: `nome`, `idade` e `sexo`.

Segue o exemplo abaixo:  

{% highlight text %}

//nome, idade e sexo são as colunas e cel1, cel2, e cel3 são as celulas, juntas as 3 formam a 1 linha.
// o trecho |---- significa um divisor. uma linha que vai dividir outra linha.


| Nome    | Idade   | Sexo    |
|:--------|:-------:|--------:|
| cel1    |   cel2  |  cel3   |
|----
{: rules="groups"}

{% endhighlight %}

Com o exemplo acima conseguimos adquirir a tabela abaixo:  <br /> 

| Nome    | Idade   | Sexo    |
|:--------|:-------:|--------:|
| cel1    |   cel2  |  cel3   |
|----
{: rules="groups"}

Iremos adicionar outra linha e editar os campos para mostrar um exemplo completo.

{% highlight text %}

//Observe, adicionei mais uma linha e um divisor.

| Nome    | idade   | sexo    |
|:--------|:-------:|--------:|
| Thiago  |   20    |masculino|
|----
| Maria   |   34    |feminino |
|----
{: rules="groups"}

{% endhighlight %}

Adicionando outra linha e as preenchendo podemos adquirir uma tabela assim: <br /> 


| Nome    | idade   | sexo    |
|:--------|:-------:|--------:|
| Thiago  |   20    |masculino|
|----
| Maria   |   34    |feminino |
|----
{: rules="groups"}

Pronto, seguindo este padrão, se cria tabelas em markdown, simples e rápido.


**Atenção:** no fim de suas tabelas, adicione `{: rules="groups"}` para tornar visíveis as linhas desta tabela. 
{: .notice }


<h2 id='bc'> Blocos de Códigos </h2>  

Em markdown utilizamos a ordem `highlight` para adicionar exemplos de códigos, e `endhighlight` , para mostrar o termino daquele dado exemplo.

#### Exemplo 

Vamos supor que queiramos adicionar um exemplo de código em HTML, basta adicionar `highlight html`, sendo `html` o tipo de linguagem que será adicionado nos códigos. A partir daí já podemos adicionar nossos códigos, após adicionar todos os nossos códigos, basta inserir ` endhighlight`, e terminar o trecho.

**Atenção:** é necessário adicionar o os simbolos( { (chave) + % (porcento) antes e depois dos `highlight` e `endhighlight`.
{: .notice} 
{% highlight html %}
<p> Testando os blocos de códigos </p> 
{% endhighlight %}

**Atenção:** Podemos adicionar diversos outros tipos de linguagens, css, js, etc.
{: .notice} 


<h2 id='marcadores'>  Marcadores de Texto</h2> 
Os marcadores são quando fazemos selecao de determinada palavra ou de um frase. Podemos ver como exemplo:

O carro é bem `largo` em relação ao `outro`.
O código deste trecho fica desta forma: 

{% highlight text %}

O carro é bem `largo` em relação ao `outro`.

{% endhighlight %}

Como visto no exemplo, para destacar uma palavra ou frase, basta adicionar ` antes e depois do trecho. 

<h2 id='td'> Texto em destaque </h2>

Para adicionar o trecho em destaques, basta adicionar `{: .notice }`, após o texto onde deseja destacar. Exemplo: 

**Atenção:** Texto que quer por em destaque. 
{: .notice } 

<br /> 
O código usado para criar o exemplo acima foi:


{% highlight text %}
**Atenção:** Texto que quer por em destaque. 
{: .notice }
{% endhighlight %}

<h2 id='imagens'> Imagens </h2> 
Em artigos, é muito comum usar-se imagens para mostrar exemplos ou até mesmo para enfeite de artigo, mostrarei como adicionar imagens no seu artigo.
Voce pode optar por adicionar imagens de duas maneiras, pode ser adicionado como HTML simples, ou usando a sintaxe do markdown. 
O corpo base para se adicionar imagens pelo markdown é, `![Nome da Imagem](caminho da imagem)`, é simples, basta adicionar este padrao e editar os campos corretamente e a imagem é adicionada. 

Vamos adicionar uma imagem que está armazenada no caminho `/images/teste.jpg`, a maneira que eu irei adicionar ela é simples, basta utilizar o padrão
`![Nome da Imagem](caminho da imagem)`, desta forma ela ficaria, `![Teste](/images/teste.jpg)`. <br />
<br /> 
![Teste](/images/teste.jpg)
<br />
<br /> 

<h2 id='botoes'> Botões </h2>

Botões são muito utilizados, veja como adicioná-los e suas opções.

{% highlight html %}
<!--exemplo de botão simples-->
<a href="#" class="btn"> Botão Simples</a>

<!--botões extras-->
<a href="#" class="btn btn-success">Success Button</a>

Adicionamos uma sub-classe (btn-sucess) após a classe padrão (btn).
{% endhighlight %}

Resultado do exemplo acima.<br /> 
<a href="#" class="btn">Botão Simples</a>
<br /> 
<a href="#" class="btn btn-success">Success Button</a>

**Atenção:** Existem outras classes de botões como `btn-warning`, `btn-danger` e `btn-info`.
{: .notice}


