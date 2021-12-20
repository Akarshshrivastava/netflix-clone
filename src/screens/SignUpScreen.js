import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignUpScreen.css";
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("registered");
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  const signInUser = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signed in");
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={signInUser}>
          Sign In
        </button>
        <h4>
          New to Netflix? <span onClick={registerUser}>Sign Up now</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
