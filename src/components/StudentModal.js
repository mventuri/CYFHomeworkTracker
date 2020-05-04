import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import ProjectTable from "./ProjectTable";
import ProjectSpecs from "../config/ProjectSpecs";
import HomeworkTable from "../components/HomeworkTable";

class StudentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ProjectSpecs,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.student.name === undefined) {
      return;
    }

    if (prevProps.student.login === this.props.student.login) {
      return;
    }

    this.state.data.forEach((project, index) => {
      fetch(
        `https://cyf-${this.props.student.login}-${project.shortName}.netlify.com`
      )
        .then((data) => {
          console.log(data);
          project.success = data.status === 200;
          let projects = this.state.data;
          projects[index] = project;
          this.setState({ data: projects });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  getProjectDetails() {
    return ProjectSpecs.map((project) => {
      return project;
    });
  }

  getStudentName() {
    let name =
      this.props.student.name === null
        ? this.props.student.login
        : this.props.student.name;

    if (name === undefined) {
      return "Loading...";
    }

    return this.toTitleCase(name);
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };

    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={() => {
          this.closeModal();
        }}
        contentLabel="Example Modal"
      >
        <div class="container">
          <div class="row" style={{ margin: "auto" }}>
            <img
              src={this.props.student.avatar_url}
              alt={this.getStudentName() + "'s Avatar Picture"}
              height="100"
              width="100"
            />
            <h1>{this.getStudentName()}</h1>
          </div>
        </div>
        <div class="container">
          <h2 className="font-weight-light">Open Pull Requests</h2>
          <HomeworkTable
            onClick={(id) => {
              this.onViewPullRequestClick(id);
            }}
            size={5}
            search={false}
          />
        </div>
        <div class="container">
          <h2 className="font-weight-light">Projects</h2>
          <ProjectTable
            data={this.getProjectDetails()}
            studentName={this.props.student.login}
          />
        </div>
      </Modal>
    );
  }
}

export default withRouter(StudentModal);
