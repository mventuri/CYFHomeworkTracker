import React from "react";
import "../../main.css";
import cityConfig from "../../config/CityConfig.js";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";
import StudentModal from "../../components/StudentModal";
import Sidebar from "../../components/Sidebar";

class StudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      school: "None",
      showOnboarding: false,
      studentModal: { show: false, student: {} },
      reviewModal: { show: false, pullRequest: {} },
    };

    this.githubRepo = this.props.githubRepo;
    this.authRepo = this.props.authRepo;
    this.studentRepo = this.props.studentRepo;
    this.city = this.props.match.params.city;
  }

  componentDidMount() {
    let { history } = this.props;

    this.setState({
      isLoading: true,
    });

    let defaultSchool = this.city;
    if (defaultSchool != null) {
      this.setSchool(defaultSchool);
    }

    this.authRepo.registerOnAuthListener(
      (user) => {
        if (user) {
          this.githubRepo.setToken().then((u) => {
            this.setStudentFromParams();
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

  setStudentFromParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const student = urlParams.get("student");
    if (student !== null) {
      this.onStudentClicked(student);
    }
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

  onStudentClicked(studentName) {
    this.githubRepo.getStudent(studentName).then((student) => {
      console.log(student.data);
      this.setState({
        studentModal: { show: true, student: student.data },
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <Sidebar
              school={this.state.school}
              history={this.history}
              currentCity={this.city}
            />
          </div>
          <div className="background-body col-10">
            <StudentModal
              student={this.state.studentModal.student}
              githubRepo={this.githubRepo}
              school={this.state.school}
              showModal={this.state.studentModal.show}
              pullRequestData={this.state.data}
              studentRepo={this.studentRepo}
              closeModal={() => {
                this.setState({
                  studentModal: {
                    show: false,
                    student: this.state.studentModal.student,
                  },
                });
              }}
            />
            <div className="container-fluid">
              <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                  <h1 className="font-weight-light">
                    Welcome to the <b>{this.state.school.name}</b> Student
                    Tracker
                  </h1>
                </div>
              </div>
            </div>
            {this.state.school === "None" ? null : (
              <div>
                <div className="container-fluid">
                  <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                      <h1 className="font-weight-light">Students</h1>
                      {this.state.school.students.map((studentName) => {
                        return (
                          <button
                            key={studentName}
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
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StudentPage);
