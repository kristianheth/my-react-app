import React from "react";

class NotificationLink extends React.Component {
  render() {
    return (
      <div>
        <img
          src={
            this.props.haveUnread
              ? "./img/notifications-24px.svg"
              : "./img/notifications_none-24px.svg"
          }
          alt="bell symbol"
        />
      </div>
    );
  }
}

export default NotificationLink;
