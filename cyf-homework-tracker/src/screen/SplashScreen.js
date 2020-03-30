import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    let { history } = this.props;

    this.props.authRepo.registerOnAuthListener(
      user => {
        if (user) {
          history.push("/main");
          this.showToast("User Logged In. Welcome " + user.email);
        }
      },
      () => {
        console.log(this.props.history);
        history.push("/login");
      },
      error => {
        console.log(error);
      }
    );
  }

  showToast(message) {
    toast(message, {
      autoClose: 2000
    });
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(SplashScreen);
