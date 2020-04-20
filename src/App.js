import React from "react";
import "./App.css";
import HomeworkTable from "./components/HomeworkTable";
import homeworkRepos from "./config/HomeworkRepositories.js";
import cityConfig from "./config/CityConfig.js";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      school: "None",
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.githubRepo = this.props.githubRepo;
    this.authRepo = this.props.authRepo;

    console.log("Being");
  }

  componentDidMount() {
    let { history } = this.props;

    this.setState({
      isLoading: true,
    });

    console.log("componentDidMount");

    this.authRepo.registerOnAuthListener(
      (user) => {
        console.log("user");

        if (user) {
          this.githubRepo.setToken().then((u) => {
            this.loadHomeworkRepos();
          });
        } else {
          history.replace(process.env.PUBLIC_URL + "/login");
        }
      },
      () => {
        history.replace(process.env.PUBLIC_URL + "/login");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadHomeworkRepos() {
    this.githubRepo.getAllHomeworkToReview(homeworkRepos).then((pulls) => {
      this.setState({
        isLoading: false,
        data: pulls,
      });
    });
  }

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  setSchool(schoolName) {
    this.setState({ school: this.getSchoolFromName(schoolName) });
  }

  getSchoolFromName(schoolName) {
    return cityConfig.filter((city) => {
      return city.name === schoolName;
    })[0];
  }

  getDataForSchool(school) {
    return this.state.data.filter((homework) => {
      return school.students.includes(homework.user.login);
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
          <div className="container">
            <a className="navbar-brand" href="#">
              CodeYourFuture Homework Tracker
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://docs.codeyourfuture.io/volunteers/education/homework-feedback"
                    target="_blank"
                  >
                    Feedback Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div class="card border-0 shadow my-5">
            <div class="card-body p-5">
              <h1 class="font-weight-light">Welcome to the Homework Tracker</h1>
              <p class="lead">Select your school:</p>
              <div>
                {cityConfig.map((city) => {
                  return (
                    <button
                      class={
                        this.state.school.name === city.name
                          ? "btn btn-primary"
                          : "btn btn-outline-primary"
                      }
                      onClick={() => this.setSchool(city.name)}
                    >
                      {city.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {this.state.school === "None" ? null : (
          <div>
            <div className="container">
              <div class="card border-0 shadow my-5">
                <div class="card-body p-5">
                  <h1 class="font-weight-light">Remember to give a grade</h1>
                  <p>
                    It's important that you give a grade on the students
                    homework so that we can track their development and growth
                    over the course.
                  </p>

                  <p>
                    You can find a guide on how grade homework{" "}
                    <a
                      href="https://docs.codeyourfuture.io/volunteers/education/homework-feedback#2-homework-grading"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                  </p>

                  <p>Give feedback here:</p>

                  <div>
                    <a
                      class="btn btn-primary"
                      href={this.state.school.tracker}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Give Feedback
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card border-0 shadow my-5">
                <div>
                  <HomeworkTable
                    isLoading={this.state.isLoading}
                    data={this.getDataForSchool(this.state.school)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
