import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./app.js";
import { BookListContextProvider } from "./hooks/use-book-list.js";
import * as theme from "./components/theme.js";

render(
  <ThemeProvider theme={{}}>
    <BookListContextProvider>
      <Router>
        <App />
      </Router>
    </BookListContextProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
