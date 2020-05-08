import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";

class RepoContentsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pullData: [] };
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
          Authorization: `Bearer ${this.props.token}`,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ pullData: json });
      });
  }

  getFolderNameFromPath(path) {
    let split = path.split("/");
    console.log(split);
    let folderName = split[split.length - 2];
    if (folderName === undefined) {
      return split[0];
    } else {
      return folderName;
    }
  }

  getFolderAndFileNameFromPath(path) {
    let split = path.split("/");
    console.log(split);
    let folderName = split[split.length - 2];
    let fileName = split[split.length - 1];
    if (folderName === undefined) {
      return split[0];
    } else {
      return folderName + "/" + fileName;
    }
  }

  getHTMLButtons() {
    return this.state.pullData
      .filter((file) => {
        return file.path.includes(".html");
      })
      .map((file) => {
        return (
          <a
            className="btn btn-outline-secondary btn-sm m-1"
            key={file.path}
            href={file.href}
            target="_blank"
          >
            {this.getFolderNameFromPath(file.path)}
          </a>
        );
      });
  }

  getOtherButtons() {
    return this.state.pullData
      .filter((file) => {
        return file.path.includes(".html") === false;
      })
      .map((file) => {
        return (
          <a
            className="btn btn-outline-secondary btn-sm m-1"
            key={file.path}
            href={file.href}
            target="_blank"
          >
            {this.getFolderAndFileNameFromPath(file.path)}
          </a>
        );
      });
  }

  render() {
    return (
      <div class="container">
        <h5>Projects</h5>
        <div>{this.getHTMLButtons()}</div>
        <h5>Supporting Files</h5>
        <div>{this.getOtherButtons()}</div>
      </div>
    );
  }
}

export default withRouter(RepoContentsComponent);
