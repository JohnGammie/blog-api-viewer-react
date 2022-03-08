import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = (props) => {
  const NavbarContentSetBySignedInStatus = () => {
    if (props.signedIn) {
      return (
        <>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/posts">Posts</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/create">Create</NavLink>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signout">Sign out</NavBtnLink>;
            </NavBtn>
          </Nav>
        </>
      );
    } else {
      return (
        <>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/posts">Posts</NavLink>
              <NavLink to="/about">About</NavLink>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
    }
  };

  return NavbarContentSetBySignedInStatus();
};

export default Navbar;
