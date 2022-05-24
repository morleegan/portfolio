import React from "react";
import Header from "./Header/index";

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
