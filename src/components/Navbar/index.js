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
  const signInOrOut = () => {
    if (props.signedIn) {
      return <NavBtnLink to="/signout">Sign out</NavBtnLink>;
    }
    return <NavBtnLink to="/signin">Sign In</NavBtnLink>;
  };

  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavMenu>
        <NavBtn>{signInOrOut()}</NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
