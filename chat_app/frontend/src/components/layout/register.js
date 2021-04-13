import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <section className="register-section">
          <form action="" id="register">
            <h1>Register</h1>
            <label htmlFor="name_input">Name</label>
            <input name="name" id="name_input" placeholder="name" />

            <label htmlFor="email_input">Email</label>
            <input
              type="email"
              name="email"
              id="email_input"
              placeholder="email"
            />

            <label htmlFor="password_input">Password</label>
            <input
              type="password"
              name="password"
              id="password_input"
              placeholder="password"
            />

            <label htmlFor="confirm_password_input">Confirm password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password_input"
              placeholder="password"
            />

            <p className="small-text">
              <em>When registering you agree to our terms of service</em>
            </p>
            <p className="small-text">
              <em>
                Already have an account?{" "}
                <Link to="/login" className="link">
                  Login
                </Link>
              </em>
            </p>

            <button className="btn" type="submit" form="register">
              Register
            </button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default Register;
