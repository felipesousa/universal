const path = require("path");

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

module.exports = {
  getEdges,
  getTemplate,
  getLang,
  getFileName,

  mapFields,

  filterNode,
  filterNodeByLanguage,
  getDataFromCategory,
};
