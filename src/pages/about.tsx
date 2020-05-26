import React, { useContext } from "react";
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
      </Layout>
    </>
  );
};

export default AboutPage;
