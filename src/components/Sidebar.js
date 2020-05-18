import React from "react";
import { withRouter } from "react-router-dom";
import cityConfig from "../config/CityConfig.js";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.school.name);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="btn-group">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.school.name}
          </button>
          <div className="dropdown-menu">
            {cityConfig.map((city) => {
              return (
                <a className="dropdown-item" href="#" key={city.name}>
                  {city.name}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-lg">
            Homework
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-lg">
            Students
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
