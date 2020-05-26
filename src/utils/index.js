const path = require("path");

const translations = {
  home: {
    first: {
      en: "A Brazilian living in Santiago working at ",
      pt: "Um Brasileiro vivendo em Santiago trabalhando na ",
    },
    second: {
      en:
        "Using this <space> to archive and share my career, projects and dev/life-experiences.",
      pt:
        "Usando esse <espaço> para arquivar e compartilhar meus projetos, carreira e experiências.",
    },
  },
  readmore: {
    en: "Read more.",
    pt: "Ler mais.",
  },
  notfound: {
    first: {
      en: "Page not found.",
      pt: "Página não encontrada.",
    },
    second: {
      en: "Back to home page.",
      pt: "Voltar para o início.",
    },
  },
  nopost: {
    first: {
      en: "Content yet not available in English.",
      pt: "Conteúdo ainda não disponível em Português.",
    },
    second: {
      en: "Check the original version here.",
      pt: "Ver versão original.",
    },
  },
  share: {
    en: "Share on ",
    pt: "Compartilhar no ",
  },
  published: {
    en: "Published at ",
    pt: "Publicado em ",
  },
  presented: {
    en: "Presented at ",
    pt: "Apresentado em ",
  },
  timeToRead: {
    en: "Time to read: ",
    pt: "Tempo de leitura: ",
  },
};

const Months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  pt: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
};

const getEdges = (data, prop = "allMarkdownRemark") => data[prop].edges;

const getTemplate = pathname => path.resolve(pathname);

const getLang = () =>
  navigator.languages ? navigator.languages[0] : navigator.language;

const filterNode = (edge, category) =>
  edge.node.frontmatter.category === category && edge;

const filterNodeByLanguage = (edge, lang) =>
  edge.node.frontmatter.lang === lang && edge;

const mapFields = ({ node: { frontmatter, fields, ...rest } }) => ({
  ...fields,
  ...frontmatter,
  ...rest,
});

const getFileName = file => path.basename(file.fileAbsolutePath.slice(0, -6));

const getDataFromCategory = (data, category, language) =>
  getEdges(data)
    .filter(node => filterNode(node, category))
    .map(mapFields);

const getMonth = (lang, month) => Months[lang][month - 1];

const setClassMenu = (path, word) => path.includes(word) && "subactive";

const getElement = id => document.querySelector(id);
const setRandomNumber = () => Math.floor(Math.random() * 9) + 1;

module.exports = {
  getEdges,
  getTemplate,
  getLang,
  getFileName,
  getMonth,
  getDataFromCategory,
  getElement,

  mapFields,

  filterNode,
  filterNodeByLanguage,

  translations,
  setClassMenu,
  setRandomNumber,
};
