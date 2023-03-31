import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Nav />
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="header-nav">
      <NavLink className="header-nav-item" to="/">
        Home
      </NavLink>
      <NavLink className="header-nav-item" to="/form">
        Form
      </NavLink>
      <NavLink className="header-nav-item" to="/about">
        About Us
      </NavLink>
    </nav>
  );
}
