import React from "react";

export default class ArrayEditExample extends React.Component {
  constructor(props) {
    super(props);

    const { myData = [] } = props;

    this.state = {
      someArrayData: myData,
      selectedIndex: 0,
    };
  }

  render() {
    const { someArrayData, selectedIndex } = this.state;

    return (
      <div>
        {someArrayData.map((item, idx) => (
          <div
            style={{
              marginBottom: 10,
              backgroundColor: selectedIndex === idx ? "red" : null,
            }}
          >
            {item}
          </div>
        ))}

        <input
          type="text"
          value={someArrayData[selectedIndex]}
          onChange={({ target }) => {
            const newValue = target.value;
            someArrayData[selectedIndex] = newValue;

            this.setState({
              someArrayData: someArrayData,
            });
          }}
        />

        <input
          type="number"
          value={selectedIndex}
          onChange={({ target }) =>
            this.setState({
              selectedIndex: parseInt(target.value),
            })
          }
        />
      </div>
    );
  }
}
