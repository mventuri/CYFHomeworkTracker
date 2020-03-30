import React from "react";
import "./App.css";
import HomeworkTable from "./components/HomeworkTable";
import homeworkRepos from "./config/HomeworkRepositories.js";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: []
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.githubRepo = this.props.githubRepo;
    this.authRepo = this.props.authRepo;
  }

  componentDidMount() {
    let { history } = this.props;

    this.setState({
      isLoading: true
    });

    this.authRepo.registerOnAuthListener(
      user => {
        if (user) {
          this.githubRepo.setToken().then(u => {
            this.loadHomeworkRepos();
          });
        } else {
          history.replace("/login");
        }
      },
      () => {
        history.replace("/login");
      },
      error => {
        console.log(error);
      }
    );
  }

  loadHomeworkRepos() {
    homeworkRepos.forEach(repoName => {
      this.loadRepo(repoName);
    });
  }

  loadRepo(repoName) {
    let that = this;

    this.githubRepo.getHomeworkToReview(repoName).then(pulls => {
      console.log(pulls);
      that.setState({
        isLoading: false,
        data: that.state.data.concat(pulls)
      });
    });
  }

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeworkTable
            isLoading={this.state.isLoading}
            data={this.state.data}
          />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
