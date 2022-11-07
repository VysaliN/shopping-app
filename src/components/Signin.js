import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Signin.css";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email[0], password[0])
      .then(() => {
        navigate("/products");
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="signin">
      <form onSubmit={submitHandler} className="signinform" autoComplete="off">
        <center>
          <h2>Sign In</h2>
          <input
            type="email"
            name="email"
            value={email}
            className="email1"
            placeholder="Email"
            onChange={changeHandler}
          />
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            className="password1"
            placeholder="Password"
            onChange={changeHandler}
          />
          <br></br>
          <button type="submit" className="signinbtn">
            Sign In
          </button>

          <div className="noaccount">
            Don't have an account?
            <Link to="/">Sign Up</Link>
          </div>
        </center>
      </form>
    </div>
  );
};

export default SignIn;
