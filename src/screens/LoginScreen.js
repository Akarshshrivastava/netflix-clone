import React, { useState } from "react";
import "./LoginScreen.css";
import netflix_logo from "../assets/netflix-logo.png";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="loginScreen_logo" src={netflix_logo} alt="logo" />
        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="loginScreen_btn"
        >
          Sign In
        </button>
        <div className="loginScreen_fade"></div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1 className="loginScreen_title">
              Unlimited movies, TV shows and more.
            </h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStartedbtn"
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
