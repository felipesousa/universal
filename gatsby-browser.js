import React from "react";

import { AppProvider } from "./src/providers/";

import "./static/themes/dracula.css";

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
