import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

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
      return <Redirect to="/chat/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <section className="register-section">
        <form onSubmit={this.onSubmit} id="register">
          <h1>Register</h1>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name_input"
            onChange={this.onChange}
            value={username}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email_input"
            onChange={this.onChange}
            value={email}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password_input"
            onChange={this.onChange}
            value={password}
          />

          <label>Confirm password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password_input"
            onChange={this.onChange}
            value={password2}
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

          <button className="btn" type="submit">
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
