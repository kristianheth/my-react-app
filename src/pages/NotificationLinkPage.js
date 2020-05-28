import React from "react";
import NotificationLink from "../components/Content/NotificationLink/NotificationLink";

const NotificationLinkPage = () => (
  <div className="main-section__content notificationlink">
    <NotificationLink haveUnread={true} />
  </div>
);

export default NotificationLinkPage;
