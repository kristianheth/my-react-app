import React from "react";
import "./ProgressBar.css";

class ProgressBar extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div className="progress-bar">
        <div className="progress-bar__bar" style={{ width: `${value}%` }} />
      </div>
    );
  }
}

export default ProgressBar;
