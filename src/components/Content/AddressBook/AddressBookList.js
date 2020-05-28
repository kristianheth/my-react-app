import React from "react";

class AddressBookList extends React.Component {
  render() {
    const { users = [] } = this.props;

    return (
      <div style={{ margin: 10 }}>
        {users.map(({ firstName, lastName, phone }) => {
          return (
            <div
              style={{ padding: 5, border: "1px solid black", marginBottom: 4 }}
            >
              <span style={{ marginLeft: 5 }}>{firstName}</span>
              <span style={{ marginLeft: 5 }}>{lastName}</span>
              <span style={{ marginLeft: 5 }}>{phone}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AddressBookList;
