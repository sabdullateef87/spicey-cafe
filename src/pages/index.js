import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Homepage/Home";
import LandingPage2 from "../Components/LandingPage2/LandingPage2";
import CampusRepLandingPage from "../Components/CampusRepDesktops/LandingPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/SignUp";
import ParamsExample from "../Components/Playground/router";
import SuccessNotification from "../Components/Signup/SuccessNotification"


function Index() {
  return (
    <>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/campusrep" exact>
          <CampusRepLandingPage />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/seller" exact>
          <LandingPage2 />
        </Route>
        <Route path="/paramsexample" exact>
          <ParamsExample />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/jjj">
          <SuccessNotification />
        </Route>
        <Route path="*" component={() => <h1>Pages do not exist</h1>} />

        {/* <Route path="/">
          <LandingPage />
        </Route> */}
      </Switch>
    </>
  );
}

export default Index;
