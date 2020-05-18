import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const appContent = (
  <div className="app">
    <div className="frame">
      <h1 className="frame__header">Some nice picture of a cat</h1>

      <div className="frame__content">
        <img src="img/cat_1.jpeg"></img>
      </div>
    </div>

    <div className="frame">
      <h1 className="frame__header">Anonymous cat</h1>

      <div className="frame__content">
        <img src="img/cat_2.jpeg"></img>
      </div>
    </div>
  </div>
);
const rootElement = document.getElementById("react-app");

ReactDOM.render(appContent, rootElement);
