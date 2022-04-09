import React from "react";
import "./styles.scss"

const Header = () => {
  // TODO add header that navigates to each page,
  return (<div className="header-div">
    <a className="header-nav-text" href="me">me</a>
    <a className="header-nav-text" href="home">home</a>
    <a className="header-nav-text" href="projects">projects</a>
    <a className="header-nav-text" href="blog">blog</a>
  </div>);
};

export default Header;
