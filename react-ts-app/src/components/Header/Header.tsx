import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="header">
        <Nav />
      </div>
    );
  }
}

class Nav extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className="header-nav">
        <NavLink className="header-nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="header-nav-item" to="/about">
          About Us
        </NavLink>
      </nav>
    );
  }
}
