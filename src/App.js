import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import createStore from "./store";
const { store } = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <></>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
