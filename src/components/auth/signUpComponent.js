import React, { Component, Fragment } from "react";
import { Loading } from "../../actions/loadingAction";
import loginAction from "../../actions/auth/loginAction";
import { connect } from "react-redux";
import "../../assets/form.scss";
import SignUpAction from "../../actions/auth/signupAction";
import SignupForm from "../../views/signupForm";

export class Signup extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    if (nextProps.register === 201) {
      nextProps.loginAction(this.state);
    }
    if (nextProps.status) {
      localStorage.setItem("token", nextProps.token);
      this.props.history.push("/");
    }
  }
  handleValidSubmit = (event, values) => {
    this.setState(values);
    this.props.Loading(true);
    this.props.SignUpAction(values);
  };
  render() {
    return (
      <Fragment>
        <SignupForm
          submit={this.handleValidSubmit}
          loader={!this.props.isLoading}
          error={this.props.error}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  register: state.userReducer.status,
  isLoading: state.loadingReducer.isLoading,
  status: state.userReducer.isLoggedIn,
  token: state.userReducer.user.Token,
  error: state.userReducer.error
});
export { Signup as SignupTest }
export default connect(
  mapStateToProps,
  { SignUpAction, Loading, loginAction }
)(Signup);