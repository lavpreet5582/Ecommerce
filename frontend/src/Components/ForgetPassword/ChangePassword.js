import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import { useParams, Link, useNavigate } from "react-router-dom";

export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const {user_id} = useParams();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log("Hadle Submit Called");
    console.log(password, password1);
    if (password === password1) {
      console.log("Matched");
      console.log(user_id, password);
      const data = await AuthService.changePassword(user_id, password);
      if (data.status === 200) {
        alert("Password Changed! Please Login");
        navigate("/login");
      }
    //   console.log(data);
      alert("Oops.... Some Error Occurred");
    } else {
      console.log("Not Matched");
    }
  };

  return (
    <>
      <div className="login-form-container">
        <form className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Forget Password</h3>
            <span>Enter your new password</span>
            <div className="form-group mt-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
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
                placeholder="Confirm Password"
                onChange={(e) => {
                  setPassword1(e.target.value);
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
            <p className="signup-btn text-right mt-2">
              Dont have a account ? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
