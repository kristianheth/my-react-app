import React from "react";
import "./TrafficLight.css";

const TrafficLight = (props) => {
  return (
    <div className="trafficlight">
      <div className={"red " + (props.redIsOn ? "active" : "")}></div>
      <div className={"yellow " + (props.yellowIsOn ? "active" : "")}></div>
      <div className={"green " + (props.greenIsOn ? "active" : "")}></div>
    </div>
  );
};

export default TrafficLight;
