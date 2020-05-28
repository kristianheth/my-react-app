import React from "react";
import "./ImageSwitcher.css";

class ImageSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    const { selectedIndex } = this.state;
    const { children = [] } = this.props;
    const numberOfImages = children.length;
    const shouldEnableLeftBtn = selectedIndex > 0;
    const shouldEnableRightBtn = selectedIndex < children.length - 1;

    return (
      <div className="imageswitcher">
        <div className="imageswitcher__images">
          {shouldEnableLeftBtn && (
            <div
              className="imageswitcher__images-previous"
              style={{ width: 70, height: 70 }}
              onClick={() => {
                const nextSelectedIndex = selectedIndex - 1;
                this.setState({ selectedIndex: nextSelectedIndex });
              }}
            >
              &lt;
            </div>
          )}

          {children[selectedIndex]}
          {shouldEnableRightBtn && (
            <div
              className="imageswitcher__images-next"
              style={{ width: 70, height: 70 }}
              onClick={() => {
                const nextSelectedIndex = selectedIndex + 1;
                this.setState({ selectedIndex: nextSelectedIndex });
              }}
            >
              &gt;
            </div>
          )}
        </div>
        <div className="imageswitcher__paginator">
          <div className="imageswitcher__paginator-dots">
            {children.map((_, index) => {
              return (
                <span
                  key={index}
                  className={
                    "dot " + (selectedIndex === index ? "dot__active" : "")
                  }
                  onClick={() => {
                    this.setState({ selectedIndex: index });
                  }}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSwitcher;
