import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    let { history } = this.props;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authRepo = this.props.authRepo;
    this.authRepo.registerOnAuthListener(
      user => {
        if (user) {
          history.push(process.env.PUBLIC_URL + "/");
          this.showToast("User Logged In. Welcome " + user.email);
        }
      },
      () => {},
      error => {
        console.log(error);
      }
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    this.setState({ loading: true });
    event.preventDefault();
    this.authRepo.doSignInWithGithub(error => {
      this.showToast("Something went wrong. Call Chris.");
      this.setState({ loading: false });
    });
  }

  showToast(message) {
    toast(message, {
      autoClose: 2000
    });
  }

  render() {
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Login with Github
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginScreen);
