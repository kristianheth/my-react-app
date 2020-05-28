import React from "react";
import "./Nav.css";

const Navigation = () => (
  <div className="left-sidebar left-sidebar--visible">
    <div className="left-sidebar__toolbar">Kristian</div>

    <a
      href="/"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "" && "sidebar-navigation-item--active")
      }
    >
      Home
    </a>

    <a
      href="/?page=trafficlight"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=trafficlight" &&
          "sidebar-navigation-item--active")
      }
    >
      Traffic light
    </a>

    <a
      href="/?page=trafficlightbtncontrolled"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=trafficlightbtncontrolled" &&
          "sidebar-navigation-item--active")
      }
    >
      Traffic light controlled by buttons
    </a>

    <a
      href="/?page=trafficlightauto"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=trafficlightauto" &&
          "sidebar-navigation-item--active")
      }
    >
      Traffic light controlled automatically
    </a>

    <a
      href="/?page=desktopfan"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=desktopfan" &&
          "sidebar-navigation-item--active")
      }
    >
      Desktop fan
    </a>

    <a
      href="/?page=clock"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=clock" &&
          "sidebar-navigation-item--active")
      }
    >
      Clock
    </a>

    <a
      href="/?page=notificationlink"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=notificationlink" &&
          "sidebar-navigation-item--active")
      }
    >
      NotificationLink
    </a>

    <a
      href="/?page=emails"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=emails" &&
          "sidebar-navigation-item--active")
      }
    >
      EmailLink
    </a>

    <a
      href="/?page=speedometer"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=speedometer" &&
          "sidebar-navigation-item--active")
      }
    >
      SpeedOMeter
    </a>

    <a
      href="/?page=addressbookpage"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=addressbookpage" &&
          "sidebar-navigation-item--active")
      }
    >
      Address Book
    </a>

    <a
      href="/?page=imageswitcherpage"
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=imageswitcherpage" &&
          "sidebar-navigation-item--active")
      }
    >
      Image switcher
    </a>
  </div>
);
export default Navigation;
