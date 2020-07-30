import React from "react";
import ReactDOM from "react-dom";
import App from "./app/containers/App";
import { createStore } from "redux";
import comments from "./app/data/Reducers";

let initialState = [];

if (localStorage.getItem("comments") != null) {
  initialState = JSON.parse(localStorage.getItem("comments"));
}

const store = createStore(comments, initialState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
