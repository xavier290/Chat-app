import React, { Component } from "react";

import MenuIcon from "@material-ui/icons/Menu";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="menu">
          <MenuIcon />
          <nav>
            <ul>
              <li>Messages</li>
              <li>Online</li>
              <li>Groups</li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="content">
            <h2>Lastest Messages:</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
