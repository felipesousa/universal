import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <h1>404 page</h1>
      <Link to="/">Voltar para a página principal</Link>
    </Layout>
  );
};
