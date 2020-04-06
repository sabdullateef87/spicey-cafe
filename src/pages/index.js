import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Homepage/Home";
import LandingPage2 from "../Components/LandingPage2/LandingPage2";
import CampusRepLandingPage from "../Components/CampusRepDesktops/LandingPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/SignUp";

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
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/seller">
          <LandingPage2 />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        {/* <Route path="/">
          <LandingPage />
        </Route> */}
      </Switch>
    </>
  );
}

export default Index;
