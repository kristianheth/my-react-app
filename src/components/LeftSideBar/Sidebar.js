import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar-navigation-item">
      <a href={props.nav}>{props.children}</a>
    </div>
  );
};

export default Sidebar;
