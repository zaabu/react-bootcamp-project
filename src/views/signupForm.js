import React from "react";
import Button from "../common/button";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const SignupForm = props => (
  
  <div className="signup-form">
        <AvForm className="form" onValidSubmit={props.submit}>
        
          <h2>Create an Account</h2>
          <AvField
            type={"text"}
            name={"firstname"}
            placeholder={"First Name"}
            required
            errorMessage="enter first name"
        
          />
          <AvField
            type={"text"}
            name={"secondname"}
            placeholder={"Second Name"}
            required
            errorMessage="enter second name"

          />
          <AvField
            type={"email"}
            name={"email"}
            placeholder={"Email Address"}
            errorMessage="enter valid email address"
          />
          <AvField
            type={"text"}
            name={"phone"}
            placeholder={"Phone Number"}
            required
            errorMessage="enter valid phone number"
         
          />
          <AvField
            id="password"
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            required
            errorMessage="enter password"
          />
          <AvField
            id="confirm_password"
            type={"password"}
            name={"confirm_password"}
            placeholder={"Confirm Password"}
            required
            errorMessage="confirm your password"
          />
       
          <div className="form-group">
            <Button
              type={"submit"}
              btnClass={"btn btn-success btn-lg btn-block signup-btn"}
              title={"Sign Up"}
            />
        
            
          </div>
          <div className="form-group">
            <div id="login-row" >
            Already have an account ? <Link to="/login"> Login Here </Link>
            </div>
          </div>

        </AvForm>
      </div>
);

export default SignupForm;
