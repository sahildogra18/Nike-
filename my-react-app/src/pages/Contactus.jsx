import React, { useState } from "react";

function AuthForm() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Sign-Up
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot Password ?</a>
              <button>Login </button>
              <p>
                Not a Member ?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setIsLogin(false);
                  }}
                >
                  Sign up now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h1>Sign up Form</h1>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="confirm Password" />
              <button>signup</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
