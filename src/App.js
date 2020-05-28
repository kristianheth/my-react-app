import React from "react";
import "./index.css";

import BlogPage from "./pages/BlogPage";
import TrafficLightPage from "./pages/TrafficLightPage";
import ClockPage from "./pages/ClockPage";
import NotificationLinkPage from "./pages/NotificationLinkPage";
import EmailLinkPage from "./pages/EmailLinkPage";
import SpeedOMeterPage from "./pages/SpeedOMeterPage";
import TrafficLightBtnControlledPage from "./pages/TrafficLightBtnControlledPage";
import Navigation from "./components/Navigation/Navigation";
import TrafficLightAutoPage from "./pages/TrafficLightAutoPage";
import DesktopFanPage from "./pages/DesktopFanPage";
import AddressBookPage from "./pages/AddressBookPage";
import ImageSwitcherPage from "./pages/ImageSwitcherPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />

        <div className="main-section main-section--with-left-side-bar">
          <div className="main-section__toolbar">
            {window.location.search === "" && <BlogPage />}

            {window.location.search === "?page=trafficlight" && (
              <TrafficLightPage />
            )}

            {window.location.search === "?page=trafficlightbtncontrolled" && (
              <TrafficLightBtnControlledPage />
            )}

            {window.location.search === "?page=trafficlightauto" && (
              <TrafficLightAutoPage />
            )}

            {window.location.search === "?page=desktopfan" && (
              <DesktopFanPage />
            )}

            {window.location.search === "?page=clock" && <ClockPage />}

            {window.location.search === "?page=notificationlink" && (
              <NotificationLinkPage />
            )}

            {window.location.search === "?page=emails" && <EmailLinkPage />}

            {window.location.search === "?page=speedometer" && (
              <SpeedOMeterPage />
            )}

            {window.location.search === "?page=addressbookpage" && (
              <AddressBookPage />
            )}

            {window.location.search === "?page=imageswitcherpage" && (
              <ImageSwitcherPage />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
