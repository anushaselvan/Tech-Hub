import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import coffee from '../../assets/coffee.gif';
import { Button , Avatar, AvatarBadge} from '@chakra-ui/react';






function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="login">
        <ul className="flex-row">
           <li className="mx-1">
            <Link to="/account/">
            <Avatar w={10} h={10}>
    <AvatarBadge boxSize='1rem'  bg='green.500' />
  </Avatar>            
  </Link>
            </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul></div>
      );
    } else {
      return (
        <div className="login">

        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>/</li>
          <li className="mx-1">
            <Link to="/signup">
            {/* <Button colorScheme='teal'>Signup</Button>  */} Signup
            </Link>
          </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h3>
        <Link to="/">
        <span><img src={coffee} alt="coffee" width="30px"/></span> Tech Hub
          
        </Link>
      </h3><div className="navStyle">
      <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/ask">
              Ask
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/news">
              News
            </Link>
          </li>
          </ul></div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
