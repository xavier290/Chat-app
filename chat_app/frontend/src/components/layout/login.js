import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/chat" />;
    }
    const { email, password } = this.state;

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
              onChange={this.onChange}
              value={email}
            />
            <div style={{ height: "10px" }}></div>

            <label htmlFor="password_input">Password</label>
            <input
              type="password"
              name="name"
              id="password_input"
              placeholder="password"
              onChange={this.onChange}
              value={password}
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
