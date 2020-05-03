import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";

class Onboarding extends React.Component {
  render() {
    if (this.props.fullOnboarding) {
      return (
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <h1 className="font-weight-light">First Time Here?</h1>
              <p className="lead">
                Thank you for helping mark our students homework. Homework
                feedback provides the backbone of our tracking of our students
                progress and is vital in order to encourage growth and build
                confidence in our students.
              </p>
              <h3 className="font-weight-light">1. Read the guide</h3>
              <p>
                The guide gives high level information and what we're trying to
                achieve with the feedback that we give and the steps required to
                fully mark the homework. You can read the full guide{" "}
                <a
                  href="https://docs.codeyourfuture.io/volunteers/education/homework-feedback"
                  target="_blank"
                >
                  here
                </a>
              </p>
              <h3 className="font-weight-light">2. Choose your city</h3>
              <p>
                In the card below you can choose the city that you belong to.
                You are - of course - welcome to mark the homework of our any of
                our students but we suggest sticking to a single school to start
                off with.
              </p>
              <h3 className="font-weight-light">3. Give feedback</h3>
              <p>On each of row of the table below you can find</p>
              <ul>
                <li>Information about the homework</li>
                <li>A link to view the source code in an online editor</li>
                <li>A link to the students pull request</li>
              </ul>
              <p>
                Peer review style feedback should be given to the student on
                their pull requests. Please read the guide above for full
                guidelines. You should make sure to tag the homework correctly
                when you have reviewed it. See{" "}
                <a
                  href="https://docs.codeyourfuture.io/volunteers/education/homework-feedback#labelling-the-pull-request"
                  target="_blank"
                >
                  here
                </a>{" "}
                for more information.
              </p>
              <p>Give feedback here:</p>
              <div>
                <a
                  className="btn btn-primary"
                  href={this.props.school.tracker}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give Feedback
                </a>
              </div>

              <h3 className="font-weight-light">4. Give a grade</h3>
              <p>
                It is very important that when you finish giving feedback on a
                students homework that you record the results in the tracking
                spreadsheet. These are city specific and you can find the link
                to your cities in the card below.
              </p>
              <h3 className="font-weight-light">Questions</h3>
              <p>Speak to your Class Coordinator or Chris Owen.</p>
              <button
                className="btn btn-primary"
                onClick={() => this.props.hideOnboarding()}
              >
                Hide this message
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <h1 className="font-weight-light">Remember to give a grade</h1>
              <p>
                It's important that you give a grade on the students homework so
                that we can track their development and growth over the course.
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
                  href={this.props.school.tracker}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give Feedback
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Onboarding);
