import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
import { createMessage } from "../../../actions/messages";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <section className="form-section">
        <div className="login-part">
          <h2>Welcome Back!</h2>
          <p>
            If You already have an account just sign in with ur info to connect
            in the Hub.
          </p>
          <button className="btn">
            <Link to="/login">
              Sign In
              <ArrowRightIcon />
            </Link>
          </button>
        </div>

        <form onSubmit={this.onSubmit} id="register">
          <h1>Register</h1>

          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            required="True"
            value={username}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={this.onChange}
            required="True"
            value={email}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={password}
            autoComplete="tel"
            required="True"
          />

          <label>Confirm password</label>
          <input
            type="password"
            name="password2"
            onChange={this.onChange}
            value={password2}
            autoComplete="tel"
            required="True"
          />

          <p className="small-text">
            <em>When registering you agree to our terms of service </em>
            <em>
              Already have an account?{" "}
              <Link to="/login" className="link">
                Login
              </Link>
            </em>
          </p>

          <button className="btn registerBtn" type="submit">
            Register
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
