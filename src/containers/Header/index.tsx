import React from "react";
import { Link } from "gatsby";

import "./styles.scss";

const LinkClass: React.FunctionComponent<{ to: string; title: string }> = ({
  to,
  title,
}) => {
  return (
    <Link
      className="header-nav-text"
      activeClassName="header-nav-text-active"
      to={to}
    >
      {title}
    </Link>
  );
};

const Header = () => {
  return (
    <div className="header-div">
      <LinkClass title="me" to="/me" />
      <LinkClass title="home" to="/" />
      <LinkClass title="blog" to="/blog" />
    </div>
  );
};

export default Header;
