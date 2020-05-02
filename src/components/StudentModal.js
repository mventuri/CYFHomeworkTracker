import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import ProjectTable from "./ProjectTable";
import ProjectSpecs from "../config/ProjectSpecs";

class StudentModal extends React.Component {
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

    console.log(name);

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
        <ProjectTable
          data={this.getProjectDetails()}
          studentName={this.props.student.login}
        />
      </Modal>
    );
  }
}

export default withRouter(StudentModal);
