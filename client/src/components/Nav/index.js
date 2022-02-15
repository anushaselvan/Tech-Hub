import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import coffee from "../../assets/coffee.gif";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="login navBar">
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/account/">
                <Avatar w={8} h={8}>
                  <AvatarBadge boxSize="1rem" bg="green.500" />
                </Avatar>
              </Link>
            </li>
            |
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="login navBar">
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/login">Login</Link>
            </li>
            <li>|</li>
            <li className="mx-1">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-2 navBar">
      <Link to="/">
        <span>
          <img src={coffee} alt="coffee" width="30px" />
        </span>
        <span id="title">Tech Hub</span>
      </Link>

      <div className="navStyle">
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          |
          <li className="mx-1">
            <Link to="/ask">Ask</Link>
          </li>
          |
          <li className="mx-1">
            <Link to="/news">News</Link>
          </li>
          |
          <li className="mx-1">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
