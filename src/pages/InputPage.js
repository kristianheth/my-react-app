import React from "react";

import ProgressBar from "../components/Content/ProgressBar/ProgressBar";

class InputPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progressValue: 50,
    };
  }
  render() {
    return (
      <div>
        <ProgressBar value={this.state.progressValue} />
<div style></div>
        
        < value={50} />
      </div>
    );
  }
}

export default InputPage;
