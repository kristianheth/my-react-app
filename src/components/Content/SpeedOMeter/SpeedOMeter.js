import React from "react";
import "./SpeedOMeter.css";

export class SpeedOMeter extends React.Component {
  render() {
    const { speed } = this.props;
    const markerBig = [];
    for (let i = 0; i < 10; i++) {
      const style = { transform: `translateY(50%) rotate(${-45 + i * 30}deg)` };
      markerBig.push(
        <div
          key={i}
          style={style}
          className={
            "speedometer__marker-big " +
            (speed >= i * 20 ? "speedometer__marker-big--bright " : "") +
            (i > 5 ? "speedometer__marker-big--red" : "")
          }
        ></div>
      );
    }

    const markerSmall = [];
    for (let i = 0; i < 9; i++) {
      const style = { transform: `translateY(50%) rotate(${-30 + i * 30}deg)` };
      markerSmall.push(
        <div
          key={i}
          style={style}
          className={
            "speedometer__marker-small " +
            (speed >= i * 20 + 10 ? "speedometer__marker-small--bright " : "") +
            (i > 5 ? "speedometer__marker-small--red" : "")
          }
        ></div>
      );
    }

    const numbers = [];
    for (let i = 0; i < 10; i++) {
      const rotateStyle = {
        transform: `translateY(50%) rotate(${-45 + i * 30}deg)`,
      };
      const retransform = { transform: `rotate(${-(-45 + i * 30)}deg)` };
      numbers.push(
        <div
          key={i}
          style={rotateStyle}
          className={
            "speedometer__number " +
            (i > 5 ? "speedometer__number--red " : "") +
            (speed >= i * 20 ? "speedometer__number--bright " : "")
          }
        >
          <div style={retransform}>{i * 20}</div>
        </div>
      );
    }

    const angle =
      speed >= 180 ? 45 : speed >= 0 ? -225 + (270 / 180) * speed : -225;

    return (
      <div>
        <div className="speedometer">
          {markerBig}
          {markerSmall}
          {numbers}
          <div
            className={
              "speedometer__center " +
              (speed > 120 ? "speedometer__center--red" : "")
            }
          >
            {speed >= 180 ? 180 : speed <= 0 ? 0 : speed}
          </div>
          <div
            className="speedometer__needle"
            style={{ transform: `translateY(-50%) rotate(${angle}deg)` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default SpeedOMeter;
