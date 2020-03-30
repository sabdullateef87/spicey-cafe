import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Homepage/Home";
import LandingPage from "./../Components/Landingpage/Landingpage";
import LandingPage2 from "../Components/LandingPage2/LandingPage2";
import CampusRepLandingPage from "../Components/CampusRepDesktops/LandingPage";

function Index() {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/campusrep">
          <CampusRepLandingPage />
        </Route>
        <Route path="/">
          <LandingPage2 />
        </Route>
        {/* <Route path="/">
          <LandingPage />
        </Route> */}
      </Switch>
    </>
  );
}

export default Index;
