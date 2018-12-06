import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import "../assets/form.scss"


const LoginForm = props => (
 
  <div className="signup-form">
      
      <AvForm onValidSubmit={props.submit}>
      {/* <img  id="home-icon" src={logo} alt="home" /> */}
      
      <h2 className="login-h2">Log In to your Account</h2>
      
      <AvField 
      name="email" 
      placeholder="Email Address" 
      type="email" 
      required
      errorMessage=" Enter valid email address"
      />
      <AvField 
      id="password"
      name="password" 
      placeholder="Password" 
      type="password" 
      required
      errorMessage="Enter your password"
      />
      <Button 
        className="btn btn-success btn-lg btn-block signup-btn"
        color="primary"
      >
      Log In
      </Button>
      
      <div id="login-row" className="row">
          <div className="col-md-6">
            <Link to="/signup">Create Account </Link>
          </div>
          
      </div>

      </AvForm>

    
    </div>
);

export default LoginForm;
