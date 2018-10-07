import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AppContainer } from "react-hot-loader";

import { App } from "app/App";

const root = document.getElementById("root") as HTMLElement;

const hydrate = (Component: React.SFC) => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    root
  );
};

hydrate(App);
