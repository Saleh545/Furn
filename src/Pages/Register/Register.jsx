import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="login-bg">
        <div className="register-form-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="register-form text-center">
                  <div className="register-heading">
                    <span>Sign Up</span>
                    <p>Create your account to get full access</p>
                  </div>
                  <div className="input-box">
                    <div className="single-input-fields">
                      <label>Full name</label>
                      <input type="text" placeholder="Enter full name" />
                    </div>
                    <div className="single-input-fields">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter email adress" />
                    </div>
                    <div className="single-input-fields">
                      <label>Password</label>
                      <input type="password" placeholder="Enter Password" />
                    </div>
                    <div className="single-input-fields">
                      <label>Confirm Password</label>
                      <input type="password" placeholder="Confirm Password" />
                    </div>
                  </div>
                  <div className="register-footer">
                    <p>
                      Already have an account? <Link> Login</Link>here
                    </p>
                    <button class="submit-btn3">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
