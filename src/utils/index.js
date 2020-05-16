const path = require("path");

const getEdges = (data, prop = "allMarkdownRemark") => data[prop].edges;

const getLang = () =>
  navigator.languages ? navigator.languages[0] : navigator.language;

const filterNode = (edge, category) =>
  edge.node.frontmatter.category === category && edge;

const filterNodeByLanguage = (edge, lang) =>
  edge.node.frontmatter.lang === lang && edge;

const mapNodeFields = ({ node: { frontmatter, fields } }) => ({
  ...fields,
  ...frontmatter,
});

const extractFilename = file =>
  path.basename(file.fileAbsolutePath.slice(0, -6));

const getDataFromCategory = (data, category, language) =>
  getEdges(data)
    .filter(node => filterNode(node, category))
    .map(mapNodeFields);

const getTemplate = pathname => path.resolve(pathname);

module.exports = {
  getTemplate,
  extractFilename,
  getLang,
  getEdges,
  filterNode,
  mapNodeFields,
  getDataFromCategory,
  filterNodeByLanguage,
};
