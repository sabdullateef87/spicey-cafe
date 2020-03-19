import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Homepage/Home";
import LandingPage from "./../Components/Landingpage/Landingpage";

function Index() {
  return (
    <>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default Index;
