import React from "react";

import { Header } from '../containers/index';
import "../styles/index.scss";

// TODO: fix prettier
// TODO: add styles
const WebPortfolio = () => {
  return (
    <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
        <Header />
        <div className="about-wrapper">
            <h1>Morgan Peters</h1>
            <p className="about-text">a senior product engineer currently residing at{' '}<a className="about-text" href='https://cameo.com/morleegan'>Cameo{' '}</a>
                where she creates{' '}
                <a className="about-text" href="https://cameoblog.medium.com/introducing-cameos-wallet-for-talent-b7d73bbd5a0a">
                    celebrity monitization tools
                </a>. in her free time, she paints birds, works on creative coding projects and travels.
            </p>
        </div>
    </div>
  );
};

export default WebPortfolio;
