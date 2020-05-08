import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import ProjectTable from "./ProjectTable";
import ProjectSpecs from "../config/ProjectSpecs";
import CityConfig from "../config/CityConfig";
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

  getSchoolFromUsername(username) {
    if (username === undefined) {
      return "Loading...";
    }

    let foundSchool;

    CityConfig.forEach((school) => {
      if (school.students.includes(username)) {
        foundSchool = school;
      }
    });

    return foundSchool;
  }

  getPullRequestsForStudent(username) {
    return this.props.pullRequestData.filter((pull) => {
      return pull.user.login === username;
    });
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

    let school = this.getSchoolFromUsername(this.props.student.login);

    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={() => {
          this.closeModal();
        }}
        contentLabel="Example Modal"
      >
        <div class="container">
          <div class="media">
            <img
              class="align-self-start mr-3"
              height="128"
              width="128"
              src={this.props.student.avatar_url}
              alt={this.getStudentName() + "'s Avatar"}
            />
            <div class="media-body">
              <h3 class="mt-0">{this.getStudentName()}</h3>
              <p>
                School: {school.name}
                <br />
                Student Tracker:{" "}
                <a href={school.tracker} target="_blank">
                  Link
                </a>
                <br />
                Github Profile:{" "}
                <a href={this.props.student.html_url} target="_blank">
                  Link
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <h2 className="font-weight-light">Open Pull Requests</h2>
          <HomeworkTable
            onClick={(id) => {
              this.onViewPullRequestClick(id);
            }}
            size={5}
            search={false}
            data={this.getPullRequestsForStudent(this.props.student.login)}
          />
        </div>
        <hr />
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
