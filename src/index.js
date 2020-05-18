import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import SelectionScreen from "./screen/select/SelectionScreen";
import Firebase from "./repo/Firebase.js";
import LoginScreen from "./screen/login/LoginScreen";
import HomeScreen from "./screen/select/SelectionScreen";
import AuthRepository from "./repo/AuthRepository";
import GithubRepository from "./repo/GithubRepository";
import StudentRepository from "./repo/StudentRepository";
import HomeworkPage from "./screen/homework/HomeworkPage";

let firebase = new Firebase();
let studentRepo = new StudentRepository(firebase);
let authRepo = new AuthRepository(firebase);
let githubRepo = new GithubRepository(authRepo);

const routing = (
  <Router>
    <div>
      <Route
        exact
        path={process.env.PUBLIC_URL + "/"}
        component={() => (
          <SelectionScreen
            githubRepo={githubRepo}
            authRepo={authRepo}
            studentRepo={studentRepo}
          />
        )}
      />
      <Route
        path={process.env.PUBLIC_URL + "/:city/homework"}
        component={() => (
          <HomeworkPage
            githubRepo={githubRepo}
            authRepo={authRepo}
            studentRepo={studentRepo}
          />
        )}
      />
      <Route
        path={process.env.PUBLIC_URL + "/login"}
        component={() => <LoginScreen authRepo={authRepo} />}
      />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
