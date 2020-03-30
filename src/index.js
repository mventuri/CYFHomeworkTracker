import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Firebase from "./repo/Firebase.js";
import LoginScreen from "./screen/LoginScreen";
import AuthRepository from "./repo/AuthRepository";
import GithubRepository from "./repo/GithubRepository";

let firebase = new Firebase();
let authRepo = new AuthRepository(firebase);
let githubRepo = new GithubRepository(authRepo);
const routing = (
  <Router>
    <div>
      <Route
        exact
        path={"/"}
        component={() => <App githubRepo={githubRepo} authRepo={authRepo} />}
      />
      <Route
        path={"/login"}
        component={() => <LoginScreen authRepo={authRepo} />}
      />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
