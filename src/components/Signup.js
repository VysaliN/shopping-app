import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = data;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password[0].length >= 8) {
      createUserWithEmailAndPassword(auth, email[0], password[0])
        .then((user) => {
          console.log(user);
          navigate("/products");
        })
        .catch((err) => console.log(err));
    } else {
      alert("password must be 8 characters");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={submitHandler} className="signupform" autoComplete="off">
        <center>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="username"
            className="username"
            value={username}
            placeholder="Username"
            onChange={changeHandler}
            required
          />
          <br></br>
          <input
            type="email"
            name="email"
            className="email"
            value={email}
            placeholder="Email"
            onChange={changeHandler}
            required
          />
          <br></br>

          <input
            type="password"
            name="password"
            className="password"
            value={password}
            placeholder="Password"
            onChange={changeHandler}
            required
          />
          <br></br>
          <label>
            <input type="checkbox" required /> I accept the Terms of Use &
            Privacy Policy
          </label>
          <br></br>
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
       
          <div className="account">
          Already have an account?
          <Link to="/signin">Sign In</Link>
        </div>
        </center>
      </form>
    </div>
  );
};

export default Signup;
