import React, { Component } from "react";

//stateless Fucntional componet

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span>{props.totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
