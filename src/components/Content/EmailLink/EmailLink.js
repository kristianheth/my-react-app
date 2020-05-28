import React from "react";
import "./EmailLink.css";

class EmailLink extends React.Component {
  render() {
    const { numberOfUnread } = this.props;
    return (
      <div className="emaillink">
        <span className={numberOfUnread === 0 ? "none" : "emaillink__mail"}>
          {numberOfUnread}
        </span>
        <img src="./img/mail.svg" alt="mail logo" />
      </div>
    );
  }
}

export default EmailLink;
