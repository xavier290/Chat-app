import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <section className="register-section">
          <form>
            <h1>Login</h1>
            <label htmlFor="email_input">Email</label>
            <input
              type="email"
              name="email"
              id="email_input"
              placeholder="email"
            />
            <div style={{ height: "10px" }}></div>

            <label htmlFor="password_input">Password</label>
            <input
              type="password"
              name="name"
              id="password_input"
              placeholder="password"
            />
            <div style={{ height: "10px" }}></div>

            <p className="small-text">
              <em>
                Don't have an account?{" "}
                <Link className="link" to="/register">
                  Register
                </Link>
              </em>
            </p>
            <div style={{ height: "30px" }}></div>

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default Login;
