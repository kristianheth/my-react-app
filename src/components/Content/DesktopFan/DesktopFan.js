import React from "react";
import "./DesktopFan.css";

class DesktopFan extends React.Component {
  render() {
    return (
      <div class={"ceiling-container " + (this.props.isOn ? "animated" : "")}>
        <div class="center"></div>
        <div class="another-center"></div>
      </div>
    );
  }
}

export default DesktopFan;
