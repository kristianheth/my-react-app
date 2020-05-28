import React from "react";
import Clock from "../components/Content/Clock/Clock";

const ClockPage = () => (
  <div className="main-section__content clocks">
    <Clock hh={10} mm={15} sec={34} rotationMode={true} />
    <Clock hh={6} mm={20} sec={15} />
  </div>
);

export default ClockPage;
