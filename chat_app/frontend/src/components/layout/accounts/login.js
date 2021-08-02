import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }
    const { username, password } = this.state;

    return (
      <section className="form-section">
        <div className="register-part">
          <h2>Hello There!</h2>
          <p>
            If you don't have an account, create one and stay connected forever
            through the hub, with just a few clicks.
          </p>
          <button className="btn">
            <Link to="/register">
              Sign Up
              <ArrowRightIcon />
            </Link>
          </button>
        </div>

        <form id="login" onSubmit={this.onSubmit}>
          <h1>Login</h1>

          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            value={username}
            required="True"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={password}
            autoComplete="true"
            required="True"
          />

          <p className="small-text">
            <em>Don't have an account? </em>
            <em>
              <Link className="link" to="/register">
                Register
              </Link>
            </em>
          </p>

          <button className="btn loginBtn" type="submit">
            Login
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
