import React from "react";
import SpeedOMeter from "../components/Content/SpeedOMeter/SpeedOMeter";

const SpeedOMeterPage = () => (
  <div className="speedometer">
    <SpeedOMeter speed={0} />
    <SpeedOMeter speed={120} />
    <SpeedOMeter speed={200} />
  </div>
);

export default SpeedOMeterPage;
