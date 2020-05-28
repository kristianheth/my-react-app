import React from "react";
import "./TrafficLight.css";

const TrafficLight = (props) => (
  <div className="trafficlight">
    <div className={"red " + (props.redIsOn ? "active" : "")}></div>
    <div className={"amber " + (props.amberIsOn ? "active" : "")}></div>
    <div className={"green " + (props.greenIsOn ? "active" : "")}></div>
  </div>
);

export default TrafficLight;
