import React from "react";

import TrafficLight from "../TrafficLight/TrafficLight";

class TrafficLightBtnControlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greenIsOn: false,
      redIsOn: true,
      amberIsOn: false,
    };
  }

  render() {
    const { greenIsOn, redIsOn, amberIsOn } = this.state;
    return (
      <div className="traffic-light-controlled">
        <TrafficLight
          greenIsOn={greenIsOn}
          redIsOn={redIsOn}
          amberIsOn={amberIsOn}
        />

        <div className="traffic-light-controlled__buttons">
          <button
            onClick={() => {
              this.setState({
                greenIsOn: true,
                redIsOn: false,
                amberIsOn: false,
              });
            }}
          >
            Switch on Green
          </button>

          <button
            onClick={() => {
              this.setState({
                greenIsOn: false,
                redIsOn: false,
                amberIsOn: true,
              });
            }}
          >
            Switch on Amber
          </button>

          <button
            onClick={() => {
              this.setState({
                greenIsOn: false,
                redIsOn: true,
                amberIsOn: false,
              });
            }}
          >
            Switch on Red
          </button>
        </div>
      </div>
    );
  }
}

export default TrafficLightBtnControlled;
