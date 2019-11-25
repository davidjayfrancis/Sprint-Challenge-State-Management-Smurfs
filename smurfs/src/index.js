import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import reducer from "./reducers";

const enhancer = compose(applyMiddleware(thunk), applyMiddleware(logger));

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
