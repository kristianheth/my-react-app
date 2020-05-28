import React from "react";
import DesktopFan from "../components/Content/DesktopFan/DesktopFan";

const DesktopFanPage = () => (
  <div className="parent">
    <DesktopFan isOn={true} />
    <DesktopFan isOn={false} />
  </div>
);

export default DesktopFanPage;
