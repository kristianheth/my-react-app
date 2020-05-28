import React from "react";
import "./DesktopFan.css";

class DesktopFan extends React.Component {
  render() {
    const { isOn } = this.props;
    return (
      <div class={"ceiling-container " + (isOn ? "animated" : "")}>
        <div class="center"></div>
        <div class="another-center"></div>
      </div>
    );
  }
}

export default DesktopFan;
