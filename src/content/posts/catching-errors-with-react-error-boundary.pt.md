---
title: "Capturando erros com React Error Boundary"
date: "2020-03-18"
category: posts
lang: pt
---

> Um conhecimento em React lifecycles é indicado, caso tenha dúvidas ou não conheça, [esse guia pode lhe ajudar](https://reactjs.org/docs/glossary.html#lifecycle-methods)!

## Introdução

React 16.x trouxe consigo ótimas e boas implementações e melhorias significantes, uma delas é extremamente útil para controle de erros dentro da aplicação, conhecido por `error boundary` é uma estratégia de captura de erros que naturalmente quebrariam a aplicação (comportamento natural de aplicações javascript), agora podem ser controlados e escalados com simples lifecycles React! Até o momento `apenas` classes components têm suporte aos ciclos de vida que são necessários para a captura e controle, mais detalhes pode encontrar [na documentação oficial](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes).

Os lifecycles são `static getDerivedStateFromError` e `componentDidCatch` que podem ser usados juntos ou separados, mas o conjunto dos dois métodos possibilitam um controle melhor.

## Como funciona?

Genericamente falando, o lifecycle captura um error em qualquer ponto da árvore `abaixo` dele, qualquer erro que ocorra dentro do mesmo nó só será capturado pelo primeiro `boundary` da árvore no nível superior ao do nó. De maneira geral e como indicação como boas práticas, se aplica BoundaryWrapper para capturar os erros genéricos, como forma de centralizar as capturas de erros, facilitando um debugging, mudança, etc. Os outros boundary's específicos devem ser criados e aplicados de acordo com a necessidade, mas sempre atento a regra anterior de captura por nível.

Uma forma de assemelhar bem o uso de um `error boundary` é comparar com o `catch` natural que captura os erros dentro do javascript comumente já conhecido.

## Demo

Vamos simular um erro em uma requisição simples de API e disparar um error dentro do catch como conhecemos geralmente:

```javascript
import MyBoundary from "./my-boundary";

class DispacthError extends React.Component {
  componentDidMount = async () => {
    try {
      const response = await fetch("https://fake.url"); // fake url to crash
    } catch (e) {
      throw new Error(e.toString()); // throwing a new error
    }
  };

  render() {
    <div>
      <p>hi!</p>
    </div>;
  }
}

const App = () => (
  <MyBoundary>
    <DispacthError />
  </MyBoundary>
);

ReactDOM.render(document.getElementById("root"), <App />);
```

O component `MyBoundary` é o responsável por capturar o erro e mostrar uma mensagem:

```javascript
export default class MyBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(data) {
    return { error: true }; // update the state object
  }

  componentDidCatch(error, data) {
    // handle the error content here.
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) return <p>Something wrong happen! 🧐s</p>;

    return children;
  }
}
```

O método `componentDidCatch` contém as informações do erro e todos os detalhes do que disparou o erro. Já o método `getDerivedStateFromError` retorna o novo estado para a classe, que nesse caso atualiza o state que está sendo utilizado dentro do método `render`, onde retorno uma mensagem de erro genérica ou o child que foi adicionado dentro de `App.js`.

https://codepen.io/felipesousa/pen/NWqzjyZ

## Resumo

O React de uma forma geral cada vez mais aproxima a biblioteca e todo o seu "ecossistema" o mais próximo possível da linguagem nativa, o que ajuda muito em questão de performance, curva de aprendizagem e implementação, fora as melhorias de testes, debugging, escalabilidade e compartilhamento. Capturar erro dessa forma é simplesmente uma das estratégias mais simples que me parecem hoje em dia, visto que antes, um controle a alto nível requeria um trabalho um pouco mais manual e bem mais verboso, o error boundary é uma ótima spec que ajuda e muito na qualidade e praticidade.

Existem boas referências nas quais você pode se aprofundar ainda mais e controlar melhor os casos de erros mais específicos ou mais genéricos, o artigo [Exploit React Error Boundaries to Improve UX](https://medium.com/chingu/exploit-react-error-boundaries-to-improve-ux-8e1b18faa5ab) do [Jim Medlock](https://medium.com/@jdmedlock?source=post_page-----8e1b18faa5ab----------------------) é com certeza uma boa recomendação além da [documentação oficial do React](https://reactjs.org/docs/error-boundaries.html#gatsby-focus-wrapper).

Até a próxima!
