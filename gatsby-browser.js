import React from "react";

import { LanguageProvider } from "./src/providers/";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
