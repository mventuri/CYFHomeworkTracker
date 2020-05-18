import React from "react";
import "../../main.css";
import cityConfig from "../../config/CityConfig.js";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";
import Sidebar from "../../components/Sidebar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "None",
    };

    this.githubRepo = this.props.githubRepo;
    this.authRepo = this.props.authRepo;
    this.studentRepo = this.props.studentRepo;
    this.city = this.props.match.params.city;
  }

  componentDidMount() {
    let { history } = this.props;

    let defaultSchool = this.city;
    if (defaultSchool != null) {
      this.setSchool(defaultSchool);
    }

    this.authRepo.registerOnAuthListener(
      (user) => {
        if (user) {
          this.githubRepo.setToken().then((u) => {
            // Do work
          });
        } else {
          history.push(process.env.PUBLIC_URL + "/login");
        }
      },
      () => {
        history.push(process.env.PUBLIC_URL + "/login");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.match.params.city !== nextProps.match.params.city) {
      this.city = nextProps.match.params.city;
      this.setSchoolFromDefault();
    }
  }

  setSchoolFromDefault() {
    let defaultSchool = this.city;
    if (defaultSchool != null) {
      this.setSchool(defaultSchool);
    }
  }

  setSchool(schoolName) {
    console.log(schoolName);
    cookie.save("chosenSchool", schoolName, { path: "/" });
    this.setState({ school: this.getSchoolFromName(schoolName) });
  }

  getSchoolFromName(schoolName) {
    return cityConfig.filter((city) => {
      return city.name.toLowerCase() === schoolName.toLowerCase();
    })[0];
  }

  render() {
    console.log(this.state.school);
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
            {this.state.school === "None" ? null : (
              <div className="container-fluid">
                <div className="card border-0 shadow my-5">
                  <div className="card-body p-5">
                    <h1 className="font-weight-light">
                      Welcome to <b>{this.state.school.name}</b>
                    </h1>
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

export default withRouter(Homepage);
