import React from "react";
import "./index.css";

import cats from "./components/Content/Blog/cats";
import FrameForImage from "./components/Content/Blog/FrameForImage";
import nav from "./components/LeftSideBar/nav";
import Sidebar from "./components/LeftSideBar/Sidebar";
import TrafficLight from "./components/Content/TrafficLight/TrafficLight";
import DesktopFan from "./components/Content/DesktopFan/DesktopFan";
import Clock from "./components/Content/Clock/Clock";
import NotificationLink from "./components/Content/NotificationLink/NotificationLink";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="left-sidebar left-sidebar--visible">
          <div className="left-sidebar__toolbar">Kristian</div>

          <Sidebar
            nav={nav[0].href}
            className={
              "sidebar-navigation-item " +
              (window.location.search === "" &&
                "sidebar-navigation-item--active")
            }
          >
            Home
          </Sidebar>

          <Sidebar
            nav={nav[1].href}
            className={
              "sidebar-navigation-item " +
              (window.location.search === "?page=trafficlight" &&
                "sidebar-navigation-item--active")
            }
          >
            Traffic light
          </Sidebar>

          <Sidebar
            nav={nav[2].href}
            className={
              "sidebar-navigation-item " +
              (window.location.search === "?page=desktopfan" &&
                "sidebar-navigation-item--active")
            }
          >
            Desktop fan
          </Sidebar>

          <Sidebar
            nav={nav[3].href}
            className={
              "sidebar-navigation-item " +
              (window.location.search === "?page=clock" &&
                "sidebar-navigation-item--active")
            }
          >
            Clock
          </Sidebar>

          <Sidebar
            nav={nav[4].href}
            className={
              "sidebar-navigation-item " +
              (window.location.search === "?page=notificationlink" &&
                "sidebar-navigation-item--active")
            }
          >
            NotificationLink
          </Sidebar>
        </div>

        <div className="main-section main-section--with-left-side-bar">
          <div className="main-section__toolbar">
            {window.location.search === "" && "Blog"}
            {window.location.search === "?page=trafficlight" && "Traffic light"}
            {window.location.search === "?page=desktopfan" && "Desktop fan"}
            {window.location.search === "?page=clock" && "Clock"}
            {window.location.search === "?page=notificationlink" &&
              "NotificationLink"}
          </div>

          {window.location.search === "" && (
            <div className="main-section__content">
              <h1>Welcome to my Website</h1>
              <FrameForImage
                header={cats[0].headerText}
                image={cats[0].imageSrc}
                alt={cats[0].altText}
                skip={cats[0].skipHeader}
              />

              <FrameForImage
                header={cats[1].headerText}
                image={cats[1].imageSrc}
                alt={cats[1].altText}
                skip={cats[1].skipHeader}
              >
                <h3>Exciting text</h3>
                <p>
                  Nostrud ipsum pariatur elit laboris cupidatat nulla. Labore
                  occaecat amet tempor labore irure in nisi amet labore quis. Ut
                  ullamco cupidatat culpa occaecat reprehenderit officia.
                </p>
              </FrameForImage>
            </div>
          )}

          {window.location.search === "?page=trafficlight" && (
            <div className="trafficlight-container">
              <TrafficLight
                greenIsOn={true}
                yellowIsOn={false}
                redIsOn={false}
              />
              <TrafficLight
                greenIsOn={false}
                yellowIsOn={true}
                redIsOn={false}
              />
              <TrafficLight
                greenIsOn={false}
                yellowIsOn={false}
                redIsOn={true}
              />
            </div>
          )}

          {window.location.search === "?page=desktopfan" && (
            <div className="parent">
              <DesktopFan isOn={true} />
              <DesktopFan isOn={false} />
            </div>
          )}

          {window.location.search === "?page=clock" && (
            <div className="clocks">
              <Clock hh={10} mm={15} sec={34} rotationMode={true} />
              <Clock hh={6} mm={20} sec={15} />
            </div>
          )}

          {window.location.search === "?page=notificationlink" && (
            <div className="notificationlink">
              <NotificationLink haveUnread={true} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
