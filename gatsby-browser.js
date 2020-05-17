import React from "react";

import { LanguageProvider } from "./src/providers/";

import "./static/themes/dracula.css";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
