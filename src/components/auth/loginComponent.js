import React, { Component, Fragment } from "react";
import loginAction from "../../actions/auth/loginAction";
import { connect } from "react-redux";
import "../../assets/form.scss";
import LoginForm from "../../views/loginForm";


export class Login extends Component {
  state = {};

  handleValidSubmit = (event, values) => {
    this.props.loginAction(values);
  };
  render() {
    console.log(this.props.user.isLoggedIn);
    return (
      <Fragment>
        
        <LoginForm submit={this.handleValidSubmit} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToPops = dispatch => ({
  loginAction: values => dispatch(loginAction(values)),
  
})
export default connect(
  mapStateToProps,
  mapDispatchToPops
)(Login);