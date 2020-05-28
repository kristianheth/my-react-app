import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progressValue: 0,
    };
  }
  render() {
    const { progressValue } = this.state;
    return (
      <div>
        <ProgressBar value={progressValue} />
        <div style={{ padding: 0 }}>
          <input
            type="number"
            value={progressValue}
            onChange={(event) => {
              this.setState({
                progressValue: event.target.value,
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Input;
