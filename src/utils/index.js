const getEdges = (data, prop = "allMarkdownRemark") => data[prop].edges;

const filterNode = (edge, category) =>
  edge.node.frontmatter.category === category && edge;

const mapNodeFields = ({ node: { frontmatter, fields } }) => ({
  ...fields,
  ...frontmatter,
});

const getDataFromCategory = (data, category) =>
  getEdges(data)
    .filter(node => filterNode(node, category))
    .map(mapNodeFields);

module.exports = { getEdges, filterNode, mapNodeFields, getDataFromCategory };
