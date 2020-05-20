import React from "react";
import "./FrameForImage.css";

const FrameForImage = (props) => {
  return (
    <div className="frame">
      {!props.skip && <h1 className="frame__header">{props.header}</h1>}

      <div className="frame__content">
        <img src={props.image} alt={props.alt} />
      </div>

      {props.children && (
        <div className="frame__children">{props.children}</div>
      )}
    </div>
  );
};

export default FrameForImage;
