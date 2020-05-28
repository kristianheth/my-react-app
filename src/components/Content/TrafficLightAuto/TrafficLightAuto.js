import React from "react";

import TrafficLight from "../TrafficLight/TrafficLight";

class TrafficLightAuto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greenIsOn: false,
      redIsOn: true,
      amberIsOn: false,
      previousLight: "green",
    };
  }

  render() {
    const { greenIsOn, redIsOn, amberIsOn, previousLight } = this.state;
    return (
      <div className="traffic-light-controlled">
        <TrafficLight
          greenIsOn={greenIsOn}
          redIsOn={redIsOn}
          amberIsOn={amberIsOn}
        />
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      const { greenIsOn, redIsOn, amberIsOn, previousLight } = this.state;
      if (greenIsOn) {
        this.setState({
          greenIsOn: false,
          amberIsOn: true,
          redIsOn: false,
          previousLight: "green",
        });
      } else if (amberIsOn && previousLight === "green") {
        this.setState({
          greenIsOn: false,
          amberIsOn: false,
          redIsOn: true,
        });
      } else if (redIsOn) {
        this.setState({
          greenIsOn: false,
          amberIsOn: true,
          redIsOn: false,
          previousLight: "red",
        });
      } else if (amberIsOn && previousLight === "red") {
        this.setState({
          greenIsOn: true,
          amberIsOn: false,
          redIsOn: false,
        });
      }
    }, 2000);
  }
}

export default TrafficLightAuto;
