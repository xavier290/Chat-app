import React, { Component } from "react";

import Menu from "./menu/menu";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Menu />
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
