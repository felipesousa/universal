import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Sobre e Carreira | Felipe Sousa" />
      <div style={{ height: "4rem" }} />
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
      <img src="/images/about.jpeg" alt="about banner image" />
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
      <img src="/images/devfest.jpeg" alt="speaking banner image" />
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
      <div style={{ height: "4rem" }} />
    </Layout>
  )
}

export default AboutPage