import React from "react";

class AddressBook extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          firstName: "Siddhartha",
          lastName: "Gautama",
          company: "Sacred Fig",
          phone: "+1 (934) 504-2067",
        },
        {
          firstName: "Hannibal",
          lastName: "Lecter",
          company: "Florence Delicatessen",
          phone: "+1 (980) 571-2853",
        },
        {
          firstName: "Al",
          lastName: "Bundy",
          company: "Gary's Shoes",
          phone: "+1 (812) 496-2735",
        },
      ],

      selectedIndex: 0,
    };
  }

  render() {
    const { users, selectedIndex } = this.state;

    const { firstName, lastName, company, phone } = this.state.users[
      selectedIndex
    ];

    return (
      <div style={{ marginTop: 100 }}>
        <div style={{ margin: 10 }}>
          {users.map(({ firstName, lastName, phone }, index) => {
            if (index === selectedIndex) {
              return (
                <div
                  style={{
                    padding: 5,
                    border: `1px solid red`,
                  }}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(event) => {
                        const updatedArray = users.slice();
                        updatedArray[selectedIndex].firstName =
                          event.target.value;

                        this.setState({
                          users: updatedArray,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(event) => {
                        const updatedArray = users.slice();
                        updatedArray[selectedIndex].lastName =
                          event.target.value;

                        this.setState({
                          users: updatedArray,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={(event) => {
                        const updatedArray = users.slice();
                        updatedArray[selectedIndex].company =
                          event.target.value;

                        this.setState({
                          users: updatedArray,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(event) => {
                        const updatedArray = users.slice();
                        updatedArray[selectedIndex].phone = event.target.value;

                        this.setState({
                          users: updatedArray,
                        });
                      }}
                    />
                  </div>
                </div>
              );
            }

            return (
              <div
                style={{
                  padding: 5,
                  border: `1px solid black`,
                  marginBottom: 4,
                  color: "black",
                }}
                onClick={() =>
                  this.setState({
                    selectedIndex: index,
                  })
                }
              >
                <span style={{ marginLeft: 5 }}>{firstName}</span>
                <span style={{ marginLeft: 5 }}>{lastName}</span>
                <span style={{ marginLeft: 5 }}>{phone}</span>
              </div>
            );
          })}

          <div
            style={{
              padding: 5,
              color: "white",
              backgroundColor: "red",
              marginBottom: 4,
              textAlign: "center",
            }}
            onClick={() => {
              const newArray = this.state.users.slice();
              newArray.push({});

              const newSelectedIndex = newArray.length - 1;

              this.setState({
                users: newArray,
                selectedIndex: newSelectedIndex,
              });
            }}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default AddressBook;
