import React from "react";
import "./App.css";
import HomeworkTable from "./components/HomeworkTable";
import homeworkRepos from "./config/HomeworkRepositories.js";
import cityConfig from "./config/CityConfig.js";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";
import StudentModal from "./components/StudentModal";
import OnboardingModal from "./components/OnboardingModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      school: "None",
      showOnboarding: false,
      showModal: false,
      student: {},
    };

    this.githubRepo = this.props.githubRepo;
    this.authRepo = this.props.authRepo;
    this.reviewRepo = this.props.reviewRepo;
  }

  componentDidMount() {
    let { history } = this.props;

    this.setState({
      isLoading: true,
    });

    let defaultSchool = cookie.load("chosenSchool");
    if (defaultSchool != null) {
      this.setState({
        school: this.getSchoolFromName(defaultSchool),
      });
    }

    this.setSchoolFromParams();

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

    window.addEventListener("blur", this.onFocus);
  }
  componentWilUnmount() {
    window.removeEventListener("blur", this.onFocus);
  }

  onFocus = () => {
    console.log("onResume");
  };

  setSchoolFromParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const school = urlParams.get("school");
    if (school !== null) {
      this.setState({
        school: this.getSchoolFromName(school),
      });
    }
  }

  loadHomeworkRepos() {
    this.githubRepo.getAllHomeworkToReview(homeworkRepos).then((pulls) => {
      this.setState({
        isLoading: false,
        data: pulls,
      });
    });
  }

  setSchool(schoolName) {
    cookie.save("chosenSchool", schoolName, { path: "/" });
    this.setState({ school: this.getSchoolFromName(schoolName) });
  }

  getSchoolFromName(schoolName) {
    return cityConfig.filter((city) => {
      return city.name.toLowerCase() === schoolName.toLowerCase();
    })[0];
  }

  getDataForSchool(school) {
    return this.state.data.filter((homework) => {
      if (school.name === "All") {
        return true;
      } else {
        return school.students.includes(homework.user.login);
      }
    });
  }

  hideOnboarding() {
    cookie.save("onboardingShown", false, { path: "/" });
    this.setState({ showOnboarding: false });
  }

  showOnboarding() {
    cookie.save("onboardingShown", true, { path: "/" });
    this.setState({ showOnboarding: true });
  }

  onStudentClicked(studentName) {
    this.setState({
      showModal: true,
    });

    this.githubRepo.getStudent(studentName).then((student) => {
      console.log(student.data);
      this.setState({
        student: student.data,
      });
    });
  }

  onViewPullRequestClick(id) {
    if (cookie.load("onboardingShown") === false) {
      this.showOnboarding();
    }

    this.reviewRepo.reportRepoInReview(id, "Chris");
  }

  render() {
    return (
      <div className="background-body">
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
        <StudentModal
          student={this.state.student}
          githubRepo={this.githubRepo}
          showModal={this.state.showModal}
          closeModal={() => {
            this.setState({
              showModal: false,
            });
          }}
        />
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <h1 className="font-weight-light">
                Welcome to the Homework Tracker
              </h1>
              <p className="lead">Select your school:</p>
              <div>
                {cityConfig.map((city) => {
                  return (
                    <button
                      className={
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
              <br />
              <p className="lead">Need some tips?</p>
              <div>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => this.showOnboarding()}
                >
                  Show Onboarding
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.school === "None" ? null : (
          <div>
            <div className="container">
              <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                  <h1 className="font-weight-light">Students</h1>
                  {this.state.school.students.map((studentName) => {
                    return (
                      <button
                        className="btn btn-outline-secondary btn-sm m-1"
                        onClick={() => {
                          this.onStudentClicked(studentName);
                        }}
                      >
                        {studentName}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                  <h1 className="font-weight-light">
                    Remember to give a grade
                  </h1>
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
                      className="btn btn-primary"
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
                <HomeworkTable
                  isLoading={this.state.isLoading}
                  data={this.getDataForSchool(this.state.school)}
                  onClick={(id) => {
                    this.onViewPullRequestClick(id);
                  }}
                />
              </div>
            </div>
            <OnboardingModal
              hideOnboarding={() => {
                this.hideOnboarding();
              }}
              showModal={this.state.showOnboarding}
              school={this.state.school}
              closeModal={() => {
                this.setState({
                  showOnboarding: false,
                });
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
