import React from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";

import { Header } from '../containers/index';
import "../styles/index.scss";

// TODO: fix prettier
// TODO: add styles
const WebPortfolio = () => {

  const onType = (typewriter: TypewriterClass) => {
      typewriter.typeString('morgan lee peters')
      .pauseFor(2500)
      .deleteChars(14)
      .typeString('leegan')
      .pauseFor(2500)
      .deleteChars(6)
      .start()
  }

  return (
    <div>
        <Header />
      {/*  TODO - styling of the typewritter */}
      <Typewriter className="h1" onInit={onType} options={{
          autoStart: true,
          loop: true,
          delay: 75,
          skipAddStyles: true,
          wrapperClassName: 'h1'
      }} />
    </div>
  );
};

export default WebPortfolio;
