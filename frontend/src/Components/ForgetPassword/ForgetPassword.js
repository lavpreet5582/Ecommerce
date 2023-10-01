import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
// import AuthService from "../../Services/AuthService";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Hadle Submit Called");
    console.log(email);
    let data = await AuthService.forgetPassword(email);
    if (data.status === 200) {
      alert(data.data["detail"]);
      navigate("/login");
    }
    console.log(data);
  };
  return (
    <>
      <div className="login-form-container">
        <form className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Forget Password</h3>
            <span>
              Enter your email and we'll send you a link to reset your password
            </span>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
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
