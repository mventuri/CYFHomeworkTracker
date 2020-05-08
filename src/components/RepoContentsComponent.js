import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";

class RepoContentsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      "https://preview.cyf.illicitonion.com/" +
        this.props.pull.base.repo.full_name +
        "/files/" +
        this.props.pull.number,
      {
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(RepoContentsComponent);
