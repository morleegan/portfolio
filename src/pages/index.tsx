import React from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";

import { Header } from '../containers/index';
import "../styles/index.scss";

// TODO: fix prettier
// TODO: add styles
const WebPortfolio = () => {

  const onType = (typewriter: TypewriterClass) => {
      typewriter.typeString('this is a title')
      .pauseFor(2500)
      .deleteChars(14)
      .typeString('tjhja hajejw eha')
      .pauseFor(2500)
      .deleteChars(6)
      .start()
  }

  return (
    <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
        <Header />
      {/*  TODO - styling of the typewritter */}
      <Typewriter className="h1" onInit={onType} options={{
          autoStart: true,
          loop: true,
          delay: 75,
          skipAddStyles: true,
          wrapperClassName: 'h1'
      }} />
        <p>a senior product engineer currently residing at <a href='https://cameo.com/morleegan'>Cameo</a>
            where she creates
            <a href="https://cameoblog.medium.com/introducing-cameos-wallet-for-talent-b7d73bbd5a0a">
                celebrity monitization tools
            </a>.
        </p>
        <p>in her free time, she paints birds, works on creative coding projects and travels.</p>
    </div>
  );
};

export default WebPortfolio;
