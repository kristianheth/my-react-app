import React from "react";
import "../index.css";

import TrafficLight from "../components/Content/TrafficLight/TrafficLight";

const TrafficLightPage = () => (
  <div className="trafficlight-container">
    <h1>Traffic Light</h1>

    <TrafficLight greenIsOn={true} />
    <TrafficLight redIsOn={true} />
    <TrafficLight yellowIsOn={true} />
  </div>
);

export default TrafficLightPage;
