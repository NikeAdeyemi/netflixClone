import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginSreen_logo"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)}
         className="loginScreen_button"> Sign In </button>
        <div className="loginScreen_gradient"></div>

        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ): (
            <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}
                className="loginScreen_getStarted"> GET STARTED </button>
              </form>
            </div>
          </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

//https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/7eeb2514-58e3-4528-a668-d6f53f656982/NG-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg
