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
  return (
    <>
      <SEO title={TITLE[language]} />
      <Layout>
        <SectionTitle>{TITLE[language]}</SectionTitle>
        <Content>
          <h1>👋🏻</h1>
          <p>
            22, Brasileiro natural de Fortaleza/Ceará. Vivendo em Santiago/Chile
            desde Julho de 2019 e trabalhando com Front End Engineer na
            @concretelatinoamerica.
          </p>
          <p>
            Antes de tudo, um grande obrigado por visitar e dedicar seu tempo a
            conhecer um pouco da minha história.{" "}
          </p>
          {/* <img src="/images/about2.jpg" alt="about2 banner image" />
          📸:<i> Company Office 2019, Chile.</i> */}
          <h2>Como tudo começou?</h2>
          <p>
            Meu primeiro contato com programação aconteceu quando eu tinha ~14
            anos (2012) enquanto navegava pelo Google, me lembro que conheci o
            projeto Blogger, que era um blog creator, lembro bem qual foi a
            sensação de criar a primeira página, ver os primeiros plugins -
            desde simples banners até contadores de pessoas online 🤯, por mais
            simples que fossem, a sensação de algo funcionar é até hoje,{" "}
            <strong style={{ textDecoration: "none" }}>positiva</strong> - ver
            como um "amontoado" de letras coloridas se tornam algo visualmente
            interativo me deixou super animado, aquilo me chamou atenção na
            hora!
          </p>
          <p>
            Estudava pelo YouTube e por alguns fóruns que existiam dentro da
            internet, as interações eram simplesmente com HTML e um raro e
            desconhecido CSS.
          </p>
          <p>
            Dos 15 aos 17 anos (2013-2015), entrei em uma escola pública de
            ensino técnico que foi onde estudei de maneira mais teórica,
            conceitos iniciais sobre programação com PHP, Java e um pouco de
            JavaScript, ali foi com certeza um lugar fantástico que contribuiu
            bastante pro meu foco nos estudos técnicos. Nesse meio tempo, me
            envolvi diretamente com comunidade com a 1 edição do Front In
            Fortaleza, que em anos depois eu viria a{" "}
            <a
              href={`/talks/${language}/front-in-fortaleza-2016`}
              style={{ textDecoration: "underline" }}
            >
              palestrar
            </a>{" "}
            em 2016 e até mesmo participar da{" "}
            <a
              href={`/talks/${language}/front-in-fortaleza-2018`}
              style={{ textDecoration: "underline" }}
            >
              organização
            </a>{" "}
            em 2018.
          </p>
          <img src="/images/about.jpg" alt="about banner image" />
          📸: <i>DevFest Santiago 2019, Chile.</i>
          <br />
          <br />
          <h2>Carreira & Background</h2>
          <p>
            Como desenvolvedor, tive minha primeira oportunidade como estagiário
            na empresa Altum Tecnologia/Fortaleza na metade de 2015, desde lá,{" "}
            <a
              href="https://linkedin.com/in/luisfelipesousa"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              tenho passado por algumas empresas, projetos e tecnologias
              interessantes.
            </a>{" "}
            Sempre claro focando em entrega, performance e qualidade.
          </p>
          <p>
            Dentro dos quase ~5 anos de carreira, tenho trabalhado em grande
            parte como front-end. Desde páginas responsivas até aplicações com
            React Native, migrando aplicações para Progressive Web Apps, ou
            criando algumas tools para NodeJS, etc, sempre tratando de seguir
            boas práticas e entrega de valor como valores principais.
          </p>
          <p>
            Hoje, tenho estudado e trabalhado bastante com React/Angular, JS/TS,
            Data Manager(Redux/Flux), CSS-in-JS, FP, RXJS, webpack, tooling e
            todo o ecossistema do <i>novo</i> JavaScript. Tenho feitos
            experimentos recentes com Rust e Python, aprendo bastante vendo
            outras linguagens de programação e vendo código de outros
            programadores, principalmente no GitHub.
          </p>
          <h2>Comunidade & Open-Source</h2>
          <p>
            O Front In Fortaleza foi apenas o pontapé inicial sobre o que veio a
            ser minha relação com comunidade(s). No final de 2015 recebi um
            convite do{" "}
            <a
              href="https://ythecombinator.space"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              @ythecombinator
            </a>{" "}
            para apresentar{" "}
            <a
              href={`talks/${language}/1st-nodejs-ce-meetup`}
              style={{ textDecoration: "underline" }}
            >
              minha primeira lightining-talk
            </a>
            . Foi uma experiência positiva e semanas depois fiz a segunda
            apresentação.{" "}
            <a href="/talks" style={{ textDecoration: "underline" }}>
              Você pode ver quase todas as apresentações que já tive a
              oportunidade de compartilhar em alguns eventos que participei
            </a>{" "}
            e ver um pouco da minha contribuição em comunidades.
          </p>
          <img src="/images/speaking.jpg" alt="speaking banner image" />
          📸: <i>DevFest Santiago 2019, Chile.</i>
          <br />
          <br />
          <p>
            Por quase 3 anos, participei como colaborador/organizador do{" "}
            <a href="" target="_blank" style={{ textDecoration: "underline" }}>
              Google Developers Group (GDG) Fortaleza
            </a>
            , um grupo voluntário de desenvolvedores que buscam organizar
            encontros com o principal intuito de discutir sobre tecnologia,
            compartilhar conhecimento e ajudar a comunidade a se especializar de
            forma colaborativa e rápida.
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
            Obrigado por ler, espero que goste! Aqui vou compartilhar mais
            detalhes sobre meus <a href="/posts">estudos</a>,{" "}
            <a href="https://github.com/felipesousa" target="_blank">
              projetos
            </a>
            , <a href="/talks">palestras</a> e{" "}
            <a href="https://linkedin.com/in/luisfelipesousa" target="_blank">
              carreira.
            </a>
          </p>
          <p>
            <a href="mailto:hi@felipesousa.space">
              se preferir, você também pode me enviar um email.
            </a>{" "}
            📬
          </p>
        </Content>
      </Layout>
    </>
  );
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
