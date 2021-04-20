import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="left">
          <div className="ellipse"></div>
        </div>
        <div className="right"></div>
        <main>
          <div className="main-content">
            <h1 className="title">CoderHub</h1>
            <h2>Share, Interact,</h2>
            <h2>Connect with others</h2>
            <p>Join Our Community where you can share your projects,</p>
            <p>
              get feedback and interact with other programmers to grow together.
            </p>
            <Link to="/Register">
              <button className="btn">Register</button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default LandingPage;
