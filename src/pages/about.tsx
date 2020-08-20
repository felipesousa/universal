import React, { useContext } from "react";
import styled from "styled-components";
import { Layout, SEO, SectionTitle } from "../components";
import LanguageContext from "../providers/";

const TITLE = {
  en: "About",
  pt: "Sobre",
};

const AboutPage = () => {
  const { language } = useContext(LanguageContext);
  const PageEN = () => {
    return (
      <>
        <SEO title={TITLE[language]} />
        <Layout>
          <SectionTitle>{TITLE[language]}</SectionTitle>
          <Content>
            <h1>👋🏻</h1>
            <p>
              22, Brazilian born in Fortaleza/Ceará. Living in Santiago/Chile
              since July 2019 and working with Front End Engineer at
              @concretelatinoamerica.
            </p>
            <p>
              First of all, a big thank you for visiting and dedicating your
              time to know a little of my history.{" "}
            </p>
            <h2>How it all began?</h2>
            <p>
              My first contact with programming happened when I was ~14y.o.
              (2012) while browsing Google, I remember I met Blogger project,
              which was a blog creator, I remember well what was the feeling of
              creating the first page, seeing the first plugins - from simple
              banners to online people counters 🤯, however simple as they were,
              the feeling of something working is still today, {""}{" "}
              <strong style={{ textDecoration: "none" }}> awesome </strong> -
              see how a "heap" of colored letters becomes something visually
              interactive made me super excited, it caught my attention in hour!
            </p>
            <p>
              I studied on YouTube and some forums that existed within the
              interactions, they were simply with HTML and a rare and unknown
              CSS.
            </p>
            <p>
              From 15 to 17 years old (2013-2015), I entered a public school of
              technical education that was where I studied in a more theoretical
              way, initial concepts about programming with PHP, Java and a
              little bit of JavaScript, it was certainly a fantastic place that
              contributed for my focus on technical studies. In the meantime, I
              involved directly with the community with the 1st edition of Front
              In Fortaleza, which in years later I would come to{" "}
              <a
                href={`/talks/${language}/front-in-fortaleza-2016`}
                style={{ textDecoration: "underline" }}
              >
                speak
              </a>{" "}
              and also{" "}
              <a
                href={`/talks/${language}/front-in-fortaleza-2018`}
                style={{ textDecoration: "underline" }}
              >
                be part of organization
              </a>{" "}
              at 2018.
            </p>
            <img src="/images/about.jpg" alt="about banner image" />
            📸: <i>DevFest Santiago 2019, Chile.</i>
            <br />
            <br />
            <h2>Career & Background</h2>
            <p>
              As a developer, I had my first opportunity as an intern at Altum
              Tecnologia/Fortaleza in the middle of 2015, since then
              <a
                href="https://linkedin.com/in/luisfelipesousa"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                I have been through some companies, projects and technologies
                interesting.
              </a>{" "}
              Always clear focusing on delivery, performance and quality.
            </p>
            <p>
              Within the almost ~ 5 years of career, I have worked in great part
              as front end. From responsive pages to applications with React
              Native, migrating applications to Progressive Web Apps, or
              creating some tools for NodeJS, etc., always trying to follow good
              practices and delivering value as core values.
            </p>
            <p>
              Today, I have studied and worked a lot with React/Angular, JS/TS,
              Data Manager (Redux / Flux), CSS-in-JS, FP, RXJS, webpack, tooling
              and the entire <i> new </i> JavaScript ecosystem. I have done
              recent experiments with Rust and Python, I learn a lot by watching
              other programming languages and seeing code from others
              programmers, mainly on GitHub.
            </p>
            <h2>Community & Open-Source</h2>
            <p>
              Front In Fortaleza was just the starter of what came to be be my
              relationship with community (s). At the end of 2015 I received a
              invitation{" "}
              <a
                href="https://ythecombinator.space"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                @ythecombinator
              </a>{" "}
              to present{" "}
              <a
                href={`talks/${language}/1st-nodejs-ce-meetup`}
                style={{ textDecoration: "underline" }}
              >
                my first lightining-talk
              </a>
              . It was a positive experience and weeks later I receive the
              oportunity to present a sencond call at 2nd Ionic Meetup
              Fortaleza.{" "}
              <a href="/talks" style={{ textDecoration: "underline" }}>
                You can see almost every presentation I've ever had opportunity
                to share in some events I attended
              </a>{" "}
              and see some of my contribution in communities.
            </p>
            <img src="/images/devfest.jpg" alt="speaking banner image" />
            📸: <i>DevFest Nordeste 2016, Maceió/Brazil.</i>
            <br />
            <br />
            <p>
              For almost 3 years, I participated as a collaborator/organizer of{" "}
              <a
                href=""
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Google Developers Group (GDG) Fortaleza
              </a>
              , a voluntary group of developers looking to organize meetings
              with the main purpose of discussing technology, share knowledge
              and help the community to specialize in collaborative and fast
              way.
            </p>
            <p>
              Open-source and community for me are directly linked, since I have
              always focused on open-source as a faster alternative to apply
              knowledge, learn from professionals, share experiments and support
              even in a simple way for projects that like.
            </p>
            <p>
              The idea of creating the blog and feeding content is precisely a
              way to contribute a portion to the community. Besides being a
              great personal guide. Thanks to this type of initiative, I met
              some fantastic places to go to events and also to do great
              friends.
            </p>
            <p>
              Thanks for reading, I hope you like it! Here I will share more
              details about my <a href="/posts">studies</a>,{" "}
              <a href="https://github.com/felipesousa" target="_blank">
                projects
              </a>
              , <a href="/talks">presentations</a> and{" "}
              <a href="https://linkedin.com/in/luisfelipesousa" target="_blank">
                career.
              </a>
            </p>
            <p>
              <a href="mailto:hi@felipesousa.space">
                if you prefer, you can also send me an email.
              </a>{" "}
              📬
            </p>
          </Content>
        </Layout>
      </>
    );
  };

  const PagePT = () => {
    return (
      <>
        <SEO title={TITLE[language]} />
        <Layout>
          <SectionTitle>{TITLE[language]}</SectionTitle>
          <Content>
            <h1>👋🏻</h1>
            <p>
              Olá, meu nome é Felipe, front-end engineer da
              @concretelatinoamerica e morando em Santiago - Chile.
            </p>
            <p>
              Antes de tudo, um grande obrigado por visitar e dedicar seu tempo
              a conhecer um pouco da minha história.{" "}
            </p>
            {/* <img src="/images/about2.jpg" alt="about2 banner image" />
            📸:<i> Company Office 2019, Chile.</i> */}
            <h2>Como tudo começou?</h2>
            <p>
              Meu primeiro contato com programação aconteceu quando eu tinha por
              volta de 14 anos enquanto navegava pelo Google, me lembro que
              conheci o projeto Blogger que era um blog creator, lembro bem qual
              foi a sensação de criar a primeira página, ver os primeiros
              plugins - desde simples banners, alguns scripts copiados da
              internet, etc., por mais simples que fossem, aquilo me chamou
              atenção na hora! Muitas vezes estudava por vídeos e por alguns
              fóruns que existem/existiam dentro da internet, as interações eram
              simplesmente com HTML e um raro e desconhecido CSS.
            </p>
            <p>
              Comecei a estudar programação com PHP, Java e um pouco de
              JavaScript, com o tempo fui participando ativamente de comunidades
              locais e regionais. Um dos eventos mais importantes no início foi
              o Front In Fortaleza, de acordo com cada edição fui me envolvendo
              mais com outras comunidades, participando em eventos nacionais e
              aumentando gradualmente meu networking.
            </p>
            <img src="/images/about.jpg" alt="about banner image" />
            📸: <i>DevFest Santiago 2019, Chile.</i>
            <br />
            <br />
            <h2>Carreira & Background</h2>
            <p>
              Como desenvolvedor, tive minha primeira oportunidade como
              estagiário na empresa Altum Tecnologia/Fortaleza na metade de
              2015, desde lá,{" "}
              <a
                href="https://linkedin.com/in/luisfelipesousa"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                tenho passado por algumas empresas, projetos e tecnologias
                interessantes.
              </a>
            </p>
            <p>
              Dentro dos últimos 5 anos tenho trabalhado em grande parte como
              front-end. Desde páginas responsivas, aplicações híbridas, nativas
              com React Native, ou criando algumas tools para NodeJS, etc,
              muitos deles para empresas do Brasil, EUA e Chile.
            </p>
            <p>
              Hoje, tenho estudado e trabalhado bastante com React/Angular,
              JS/TS, Data Manager(Redux/Flux), CSS-in-JS, FP, RXJS, webpack,
              tooling e todo o ecossistema do <i>novo</i> JavaScript. Tenho
              feitos experimentos recentes com Rust e Python, aprendo bastante
              vendo outras linguagens de programação e vendo código de outros
              programadores, principalmente no GitHub.
            </p>
            <h2>Comunidade & Open-Source</h2>
            <p>
              O Front In Fortaleza foi apenas o pontapé inicial sobre o que veio
              a ser minha relação com comunidade(s). No final de 2015 recebi um
              convite para minha primeira lightining-talk. Foi uma experiência
              positiva e que veio se tornando cada vez mais parte do meu
              processo de aprendizagem. Na sessão de
              <a href="/talks" style={{ textDecoration: "underline" }}>
                palestras
              </a>{" "}
              têm um pouco do que já apresentei.
            </p>
            <img src="/images/devfest.jpg" alt="speaking banner image" />
            📸: <i>DevFest Nordeste 2016, Maceió/Brasil.</i>
            <br />
            <br />
            <p>
              Por quase 3 anos, participei como colaborador/organizador do{" "}
              <a
                href=""
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Google Developers Group (GDG) Fortaleza,
              </a>{" "}
              um grupo voluntário de desenvolvedores que buscam organizar
              encontros com o principal intuito de discutir sobre tecnologia,
              compartilhar conhecimento e ajudar a comunidade a se especializar
              de forma colaborativa e rápida.
            </p>
            <p>
              Open-source e comunidade pra mim estão diretamente ligados, desde
              sempre tenho focado no open-source como alternativa mais rápida de
              aplicar conhecimentos, aprender com profissionais, compartilhar
              experimentos e apoiar mesmo que de forma simples para projetos que
              gosto.
            </p>
            <p>
              A ideia de criar o blog e alimentar com conteúdo é justamente uma
              forma de contribuir com uma parcela para a comunidade. Além de ser
              um ótimo guia pessoal. Graças a esse tipo de iniciativa, conheci
              alguns fantásticos lugares para ir a eventos e também a fazer
              grandes amigos.
            </p>
            <p>
              Espero que gostem, aqui é um coletivo de café e horas digitando -
              essas são as coisas que mais gosto de fazer -.
            </p>
          </Content>
        </Layout>
      </>
    );
  };

  return language === "pt" ? PagePT() : PageEN();
};

const Content = styled.article`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  * {
    font-family: "Slab Regular";
    font-size: 1.2rem;
    line-height: 1.4;

    a {
      color: var(--black) !important;
      line-height: 1.8;
    }
  }
`;

export default AboutPage;
