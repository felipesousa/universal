import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Sobre e Carreira | Felipe Sousa" />
      <div style={{ height: "4rem" }} />
      <p>
        Olá! Seja bem vindo(a)! Aqui eu conto alguns detalhes sobre coisas que
        considero importantes pra mim e também pra minha carreira, abaixo a
        lista do que vou comentar caso você queira ser específico:
      </p>
      <ul>
        <li>
          <a href="#whoiam">Quem sou e o que gosto de fazer</a>
        </li>
        <li>
          <a href="#career">Tecnologia e Carreira Frontend</a>
        </li>
        <li>
          <a href="#talks">Palestras e Comunidades de Tecnologia</a>
        </li>
        <li>
          <a href="#today">Hoje e futuro</a>
        </li>
      </ul>
      <h2 id="whoiam">Quem sou e o que gosto de fazer</h2>
      <p>
        Olá, meu nome é Felipe Sousa, tenho 23 anos, nasci em Fortaleza-Brasil e
        desde 2019 moro em Santiago no Chile.
      </p>
      <p>
        Sou apaixonado por tecnologia desde os meus 11 anos, gostava de
        desmontar itens eletrônicos porque gostaria de saber como funciona por
        dentro, sempre fui muito curioso para aprender coisas, principalmente
        coisas que em geral não se ouvia ou se estudava muito. Tecnologia sempre
        foi algo fascinante pra mim pois me dava a capacidade de criar coisas
        novas a partir de coisas que já existiam, acredito que até hoje posso
        dizer o mesmo sobre isso.
      </p>
      <p>
        A curiosidade por aprender as coisas me levou a gostar muito de ler,
        sobre diferentes assuntos e tópicos, entre os meus favoritos estão
        assuntos sobre psicologia, tecnologia, auto-conhecimento, história,
        biografias, etc.
      </p>
      <p>
        Um dos meus hobbies favoritos hoje são músicas em vinils, andar de
        bicicleta, praticar meditação e viajar, gosto de conhecer lugares e
        sempre procuro um lugar novo pra ir.
      </p>
      <p>
        Acredito que me resumo em aprender, automatizar e compartilhar, acredito
        que isso me levou a conhecer e aprender durante esses anos como nunca
        pensei, gosto de participar do processo de criação e gosto de poder
        saber passar o conhecimento adiante, me animo com o trabalho em equipe e
        a capacidade que temos de poder criar algo novo com distintas
        habilidades juntas.
      </p>
      <h2 id="career">Tecnologia e Carreira Frontend</h2>
      <p>
        A primeira vez que me interessei por páginas web aconteceu por volta de
        2012 quando visitava uma página de jogos para computador, naquele tempo
        conheci o projeto <a href="https://blogger.com/">Blogger</a> e
        <a href="https://samplledowns.blogspot.com/">
          {" "}
          criei meu primeiro site
        </a>{" "}
        utilizando essa ferramenta. Dentro dos seguintes anos eu tive a
        oportunidade de aprender por conta própria criando alguns projetos
        pessoais que me ajudaram a entender um pouco sobre plugins, temas
        customizados, etc e também tive cursos técnicos que me deram a
        oportunidade de aprender sobre lógica de programação, criar projetos com
        linguagens como PHP, Java e um pouco de JavaScript.
      </p>
      <p>
        Em Julho de 2015 tive minha primeira oportunidade como FrontEnd onde
        trabalhei criando aplicativos híbridos para Android e iOS utilizando
        Ionic. No mesmo ano comecei a participar de comunidades locais de
        programação o que fez com que eu tivesse ainda mais proximidade e
        contato com o mundo de desenvolvimento de software, tecnologia, etc.
      </p>
      <p>
        Desde então o trabalho com tecnologia e envolvimento com produtos de
        software somente cresceu. Entre 2015 e 2021 tive a oportunidade de
        trabalhar para empresas do Brasil, Estados Unidos e desde 2019
        trabalhando para empresas do Chile passando por diferentes tipos de
        metodologias, tecnologias, produtos e práticas que me ajudaram a crescer
        pessoalmente e profissionalmente.
      </p>
      <p>
        Em Junho de 2021 comecei minha jornada como Tech Lead de FrontEnd na
        Cornershop, está sendo uma nova forma de ver projetos de software e
        produtos, outros desafios que saem do quesito técnico e que são
        importantes assim como o lado profissional, como liderar times de
        desenvolvimento, participar do processo de arquitetura, documentação,
        análise e melhora de projetos de software desde outra perspectiva está
        sendo meu dia a dia e confesso que mais e mais sinto parte e muito feliz
        com os desafios.
      </p>
      <h2 id="talks">Palestras e comunidades de tecnologia</h2>
      <p>
        As comunidades de software foram crucialmente importantes pra minha
        carreira e pro meu conhecimento em tecnologia, desde 2015 tenho a
        cultura de participar de eventos e conferências de software para
        conhecer sobre as atualidades do mercado, novidades técnicas e aprender
        de profissionais da área com experiências diferentes da minha.
      </p>
      <p>
        Não somente para aprender, compartilhar conhecimento dentro das
        comunidades me fez ganhar habilidades como melhor comunicação, perder o
        medo de arriscar alguma nova tecnologia e até mesmo um pouco do medo de
        errar. No Brasil e também no Chile, tive muitas oportunidades de
        compartilhar conhecimento e sempre aproveitei para levar meu
        conhecimento e minha experiência de uma forma que possa ajudar outras
        pessoas.{" "}
        <a href="/talks">
          Você pode conferir as palestras aqui e também links de slides e mais
          detalhes de cada uma delas.
        </a>{" "}
      </p>
      <p> Aqui tenho algumas fotos dos eventos que já participei:</p>
      <section className="photos-container">
        <img src="/images/event02.jpg" alt="conference and events 01" />
        <img src="/images/devfest.jpeg" alt="conference and events 02" />
        <img src="/images/event01.jpg" alt="conference and events 03" />
        <img src="/images/event04.jpg" alt="conference and events 04" />
        <img src="/images/event03.jpg" alt="conference and events 05" />
        <img src="/images/about.jpeg" alt="conference and events 06" />
        <img src="/images/event05.jpg" alt="conference and events 07" />
        <img src="/images/event06.jpg" alt="conference and events 08" />
      </section>
      <h2 id="today">Hoje e futuro</h2>
      <p>
        Nesse ano de 2021 assumi cargo de Tech Lead de FrontEnd, está sendo
        muito interessante e ao mesmo tempo desafiador trabalhar de uma forma
        mais abstrata com projetos de software, liderar questões de tecnologia e
        também participar de decisões importantes para o rumo dos projetos.
        Todos essas novidades requerem novas habilidades e ai está meu foco hoje
        e pro futuro.
      </p>
      <p>
        Liderar equipes de desenvolvimento, melhorar processos de criação,
        documentação e manuntenção de projetos de software, participar de
        processos de team-building requerem mais do que apenas conhecimento
        técnico, requer habilidade de comunicação, flexibilidade para lidar com
        os problemas e também um estudo contínuo de novas metodologias dinâmicas
        de times e células.
      </p>
      <p>
        Para os próximos anos pretendo melhorar minhas habilidades com pessoas,
        times e projetos de software, o desenvolvimento de software é um mundo
        repleto de oportunidades e me sinto feliz de poder estar no começo de
        mais uma etapa importante pra minha carreira.
      </p>
      <p>
        Para mais detalhes sobre o que eu estou fazendo e quais são meus
        próximos passos, eu sempre atualizo as novidades dentro do meu{" "}
        <a href="https://linkedin.com/in/luisfelipesousa" target="_blank">
          LinkedIn
        </a>{" "}
        e também escrevo alguns artigos aqui na página. Obrigado pela leitura!
      </p>
      <br />
      <div style={{ height: "4rem" }} />
    </Layout>
  )
}

export default AboutPage
