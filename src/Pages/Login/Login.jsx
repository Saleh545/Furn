import React from "react";
import { Link } from "react-router-dom";
import "./login.css"
const Login = () => {
  return (
    <div>
      <main className="login-bg">
        <div className="login-form-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="login-form">
                  <div className="login-heading">
                    <span>Login</span>
                    <p>Enter Login details to get access</p>
                  </div>
                  <div className="input-box">
                    <div className="single-input-fields">
                      <label>Username or Email Address</label>
                      <input
                        type="text"
                        placeholder="Username / Email address"
                      />
                    </div>
                    <div className="single-input-fields">
                      <label>Password</label>
                      <input type="password" placeholder="Enter Password" />
                    </div>
                    <div className="single-input-fields login-check">
                      <input type="checkbox" id="fruit1" name="keep-log" />
                      <label for="fruit1">Keep me logged in</label>
                      <a href="#" class="f-right">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="login-footer">
                    <p>Don’t have an account? <Link to="/register">Sign Up</Link>here</p>
                    <button class="submit-btn3">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
