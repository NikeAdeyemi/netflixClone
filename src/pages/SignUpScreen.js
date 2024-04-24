import React from "react";
import "./SignUpScreen.css";
import Landingpage from "./Landingpage";

function SignUpScreen() {
    
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign Up Now.
            </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
