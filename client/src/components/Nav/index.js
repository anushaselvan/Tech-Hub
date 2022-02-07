import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import coffee from '../../assets/coffee.gif';
import { Button } from '@chakra-ui/react';



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
           <li className="mx-1">
            <Link to="/login">
              User
            </Link>
            </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">
            <Button colorScheme='teal'>Signup</Button> 
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h3>
        <Link to="/">
        <span><img src={coffee} alt="coffee" width="30px"/></span> Tech Hub
          
        </Link>
      </h3>
      <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/questions">
              Questions
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/news">
              News
            </Link>
          </li>
          </ul>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
