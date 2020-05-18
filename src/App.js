import React from "react";

import cats from "./cats";
import FrameForImage from "./FrameForImage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <FrameForImage
          header={cats[0].headerText}
          image={cats[0].imageSrc}
          alt={cats[0].altText}
        />

        <FrameForImage
          header={cats[1].headerText}
          image={cats[1].imageSrc}
          alt={cats[1].altText}
        />
      </div>
    );
  }
}

export default App;
