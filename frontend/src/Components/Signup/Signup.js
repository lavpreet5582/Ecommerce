import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import AuthService from "../../services/auth.service";
export const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordMached, setIsPasswordMached] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Hadle Submit Called");
    console.log(firstname, lastname, email, password);
    if (
      firstname.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      isPasswordMached
    ) {
      const data = await AuthService.register(
        firstname,
        lastname,
        email,
        password
      );
      if (data.status === 200) {
        let user = data.data.token;
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registered Successfully");
        navigate("/");
      }
      console.log(data);
    } else {
      alert("Please fill all the required fields");
    }
  };

  const handlePassOnchange = (e) => {
    console.log("Pass change Called");
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      const pass = password.slice(0, e.target.value.length);
      if (pass === e.target.value) {
        console.log("Matched");
        setIsPasswordMached(true);
      } else {
        console.log("Not Matched");
        setIsPasswordMached(false);
      }
    }
  };
  return (
    <div className="register-form-container">
      <form className="register-form">
        <div className="register-form-content">
          <h3 className="register-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter First Name"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm password"
              onChange={handlePassOnchange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-primary"
              id="submit-btn"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <p className="signup-btn text-right mt-2">
            Already have a account ? <Link to="/login">Login here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
