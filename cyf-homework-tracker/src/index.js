import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route path="/" component={() => <App />} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
