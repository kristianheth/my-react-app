import React from "react";
import EmailLink from "../components/Content/EmailLink/EmailLink";

const EmailLinkPage = () => (
  <div className="emaillink">
    <EmailLink numberOfUnread={15} />
  </div>
);

export default EmailLinkPage;
