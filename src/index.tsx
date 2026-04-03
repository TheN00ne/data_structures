import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import structuresReducer from "./reducers/structuresReducer";
import uiReducer from "./reducers/uiReducer";
import { App } from "./components/App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = configureStore({
  reducer: {
    structuresReducer,
    uiReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

//МОЖЕ ЩОСЬ МОЖНА ПЕРЕМІСТИТИ В dev-dependences
