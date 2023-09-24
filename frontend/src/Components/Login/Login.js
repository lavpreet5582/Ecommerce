import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import AuthService from "../../services/auth.service";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Hadle Submit Called");
    console.log(email, password);
    let data = await AuthService.login(email, password);
    if (data.token) {
      navigate("/");
    }else {
      alert("Invalid Credentials");
    }
    console.log(data);
  };
  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
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
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
          <p className="signup-btn text-right mt-2">
            Dont have a account ? <a href="/signup">Register here</a>
          </p>
        </div>
      </form>
    </div>
  );
};
