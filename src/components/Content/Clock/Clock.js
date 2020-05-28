import React from "react";
import "./Clock.css";

const Clock = (props) => {
  const { hh, mm, sec } = props;
  const hoursHandAngle = -90 + (360 / 12) * hh;
  const minutesHandAngle = -90 + (360 / 60) * mm;
  const secondsHandAngle = -90 + (360 / 60) * sec;

  const styleHrs = { transform: `rotate(${hoursHandAngle}deg)` };
  const styleMinutes = { transform: `rotate(${minutesHandAngle}deg)` };
  const styleSeconds = { transform: `rotate(${secondsHandAngle}deg)` };

  const rootClassName = `clock ${
    props.rotationMode ? "clock--rotation-mode" : ""
  }`;

  return (
    <div className={rootClassName}>
      <div className="clock__center" />
      <div className="clock__hand clock__hand--hour" style={styleHrs} />
      <div className="clock__hand clock__hand--minutes" style={styleMinutes} />
      <div className="clock__hand clock__hand--second" style={styleSeconds} />
    </div>
  );
};

export default Clock;
