import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeworkTable from "./components/HomeworkTable";

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
    let that = this;

    this.setState({
      isLoading: true
    });

    this.props.authRepo.registerOnAuthListener(user => {
      this.githubRepo.getHomeworkToReview("js-exercises").then(pulls => {
        console.log(pulls);
        that.setState({
          isLoading: false,
          data: pulls
        });
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

export default App;
