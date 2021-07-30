import React, { Component } from "react";
import { Link } from "react-router-dom";

import message from "../imgs/message.svg";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <main>
          <div className="main-content">
            <h1 className="title">Chat.Hub</h1>
            <h2>Share, Interact,</h2>
            <h2>Connect with others</h2>
            <p>
              Chat.Hub is an instant messaging tool that connects everyone with
              just a few clicks
            </p>
            <p>
              It was never too easy. No adds and nothing to download, just one
              on one communication through the hub.
            </p>
            <div>
              <button className="btn">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </main>
        <img src={message} alt="messaging" />
      </div>
    );
  }
}

export default LandingPage;
