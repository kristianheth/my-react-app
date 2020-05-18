import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const cats = [
  {
    headerText: "Some nice picture of a cat",
    imageSrc: "./img/cat_1.jpeg",
  },
  {
    headerText: "Anonymous cat",
    imageSrc: "./img/cat_2.jpeg",
  },
];

const FrameForImage = (props) => {
  return (
    <div className="frame">
      <h1 className="frame__header">{props.header}</h1>

      <div className="frame__content">
        <img src={props.image} />
      </div>
    </div>
  );
};

const appContent = (
  <div className="app">
    <FrameForImage header={cats[0].headerText} image={cats[0].imageSrc} />

    <FrameForImage header={cats[1].headerText} image={cats[1].imageSrc} />
  </div>
);
const rootElement = document.getElementById("react-app");

ReactDOM.render(appContent, rootElement);
