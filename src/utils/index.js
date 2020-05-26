const path = require("path");

const transalation = {
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

  transalation,
  setClassMenu,
  setRandomNumber,
};
