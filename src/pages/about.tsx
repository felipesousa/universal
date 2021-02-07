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
              Hi, my name is Felipe, front-end engineer at @cornershopapp and
              living in Santiago - Chile.
            </p>
            <p>
              First of all, a big thank you for visiting and dedicating your
              time to know a little of my history.{" "}
            </p>
            <h2>How it all began?</h2>
            <p>
              My first contact with programming happened when I was around 14
              years old while browsing Google, I remember that I got to know the
              Blogger project, I remember how it felt to create the first page,
              see the first plugins - from simple banners, some scripts copied
              from the internet, etc., for more simple as that was, it caught my
              attention at the time! Oftentimes studied through videos and some
              forums that exist / existed inside the internet, interactions were
              simply with HTML and a rare and unknown CSS.
            </p>
            <p>
              Over the months I started to study programming with PHP, Java and
              a little bit of JavaScript, over time I was actively participating
              local and regional communities. One of the most important events
              at the beginning it was Front In Fortaleza, according to each
              edition I went getting more involved with other communities,
              participating in events and gradually increasing my networking.
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
                {" "}
                I have been through some companies, projects, and technologies
                interesting.
              </a>
            </p>
            <p>
              Within the past 5 years I have worked largely as a front-end. From
              responsive pages, hybrid, native applications with React Native,
              or creating some tools for NodeJS, etc., many of them for
              companies in Brazil, USA and Chile.
            </p>
            <p>
              Today, I have studied and worked a lot with React/Angular, JS/TS,
              Data Manager (Redux/Flux), CSS-in-JS, FP, RXJS, webpack, tooling
              and the entire <i>new</i> JavaScript ecosystem. Have recent
              experiments with Rust and Python, I learn a lot seeing other
              programming languages and seeing code from others programmers,
              mainly on GitHub.
            </p>
            <h2>Community & Open-Source</h2>
            <p>
              Front In Fortaleza was just the kick-off of what came to be my
              relationship with community (s). At the end of 2015 I received a
              invitation to my first lightining-talk. It was an experience
              positive and that has become increasingly part of my learning
              process.
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
              even in a simple way for projects that I like.
            </p>
            <p>
              The idea behind this blog is precisely a way to contribute with a
              share for the community. In addition to being a great personal
              guide.
            </p>
            <p>
              I hope you like it, here is a coffee collective, a lot of music
              and hours typing -<i> these are the things I like to do most </i>{" "}
              -.
            </p>
            <br />
            <p>👨🏻‍💻</p>
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
              Olá, meu nome é Felipe, front-end engineer da @cornershopapp e
              morando em Santiago - Chile.
            </p>
            <p>
              Antes de tudo, um grande obrigado por visitar e dedicar seu tempo
              a conhecer um pouco da minha história.{" "}
            </p>
            <h2>Como tudo começou?</h2>
            <p>
              Meu primeiro contato com programação aconteceu quando eu tinha por
              volta de 14 anos enquanto navegava pelo Google, me lembro que
              conheci o projeto Blogger, lembro bem qual foi a sensação de criar
              a primeira página, ver os primeiros plugins - desde simples
              banners, alguns scripts copiados da internet, etc., por mais
              simples que fossem, aquilo me chamou atenção na hora! Muitas vezes
              estudava por vídeos e por alguns fóruns que existem/existiam
              dentro da internet, as interações eram simplesmente com HTML e um
              raro e desconhecido CSS.
            </p>
            <p>
              Com o passar dos meses comecei a estudar programação com PHP, Java
              e um pouco de JavaScript, com o tempo fui participando ativamente
              de comunidades locais e regionais. Um dos eventos mais importantes
              no início foi o Front In Fortaleza, de acordo com cada edição fui
              me envolvendo mais com outras comunidades, participando em eventos
              nacionais e aumentando gradualmente meu networking.
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
              processo de aprendizagem.
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
              A ideia detrás desse blog é justamente uma forma de contribuir com
              uma parcela para a comunidade. Além de ser um ótimo guia pessoal.
            </p>
            <p>
              Espero que gostem, aqui é um coletivo de café, muita música e
              horas digitando -{" "}
              <i>essas são as coisas que mais gosto de fazer</i> -.
            </p>
            <br />
            <p>👨🏻‍💻</p>
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
