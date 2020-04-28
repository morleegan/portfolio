import React from "react";
import "../styles/index.scss";

// TODO: fix prettier
// TODO: add styles
const WebPortfolio = () => {
  const githubWebsite = "https://www.github.com/morleegan";
  const cameoWebsite = "https://www.cameo.com";
  // Header
  return (
    <div>
      <h1>Morgan Peters</h1>
      <p className="box">
        I am a software engineer and artist based in Chicago. I am currently
        working at <a href={cameoWebsite}>Cameo</a> creating a messaging
        platform to help people better connect. My main focus is currently
        creating better user experiences that makes using an app feel seamless.
        In my free time, I paint with oils, take drawing courses and dabble in
        pottery.
      </p>
      <p>
        Note: I am currently working on my website, this is currently just a
        placeholder. Feel free to look through my {/* TODO: add resume*/}
        {/*<a href={"resumer pafe"}>resume</a>*/}
        {/*and*/}
        <a href={githubWebsite}>github</a>.
      </p>
    </div>
  );
};

export default WebPortfolio;
