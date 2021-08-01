import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { SideBarData } from "./menuData";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Menu() {
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sidebar);

  return (
    <Fragment>
      <header className="menu">
        <div className="menuIcon" onClick={showSideBar}>
          <MenuIcon />
        </div>
        <nav>
          <ul>
            <li>Messages</li>
            <li>Online</li>
            <li>Groups</li>
          </ul>
        </nav>
      </header>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <span className="navbar-toggle" onClick={showSideBar}>
            <CloseIcon />
          </span>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
}

export default Menu;
