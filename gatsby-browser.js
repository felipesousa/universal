import React from "react";

import { LanguageProvider } from "./src/contexts/";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
