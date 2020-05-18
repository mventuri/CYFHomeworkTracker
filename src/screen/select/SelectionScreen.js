import React from "react";
import "../../main.css";
import { withRouter } from "react-router-dom";
import cityConfig from "../../config/CityConfig";

class SelectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.githubRepo = this.props.githubRepo;
    this.authRepo = this.props.authRepo;
    this.studentRepo = this.props.studentRepo;
  }

  componentDidMount() {
    let { history } = this.props;
    this.history = history;

    this.authRepo.registerOnAuthListener(
      (user) => {
        if (!user) {
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

  render() {
    return (
      <div>
        <div className="background-body">
          <div className="container-fluid">
            <div className="card border-0 shadow my-5">
              <div className="card-body p-5">
                <h1 className="font-weight-light">
                  Welcome to the CodeYourFuture Student Tracker
                </h1>
                {cityConfig.map((city) => {
                  return (
                    <button
                      type="button"
                      className="btn btn-primary btn-lg m-2"
                      key={city}
                      onClick={() => {
                        this.history.replace(
                          process.env.PUBLIC_URL + "/" + city.name
                        );
                      }}
                    >
                      {city.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SelectionScreen);
