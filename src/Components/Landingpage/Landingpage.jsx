import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

import Drawer from "@material-ui/core/Drawer";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import SwipeableTextMobileStepper from "../Landingpage/Carousel";
import SliderOne from "../Landingpage/SliderOne";

import ProductCard from "../Landingpage/ProductCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "2px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    "&.MuiButton-root": {
      borderRadius: "0px",
      boxShadow: "none"
    },
    backgroundColor: "#FF5C00",
    borderRadius: "none",
    fontSize: "16px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px"
    }
  },
  appbar: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    boxShadow: "none"
  },
  toolbar: {},
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  subContains: {
    padding: "30px 0px"
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container flexDirection="column">
        <Grid item xs={12} sm={12} md={12}>
          <SwipeableTextMobileStepper />
        </Grid>

        {/* <Grid item xs={12} sm={12} md={12}>
          <SliderOne />
        </Grid> */}

        <Grid item xs={12} sm={12} md={12} className={classes.subContains}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5"> Quick Recipes</Typography>
            <hr style={{ margin: "0px" }} />
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "aquamarine"
              }}
            ></div>
          </Grid>
        </Grid>

        {/* <Grid item xs={12} sm={12} md={12} className={classes.subContains}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5"> Gallery </Typography>
            <hr style={{ margin: "0px" }} />
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "aquamarine"
              }}
            ></div>
          </Grid>
        </Grid> */}

        <Grid item xs={12} sm={12} md={12} className={classes.subContains}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5"> Spicey Learn</Typography>
            <hr style={{ margin: "0px" }} />
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "aquamarine"
              }}
            ></div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.subContains}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5"> Our services</Typography>
            <hr style={{ margin: "0px" }} />
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "aquamarine"
              }}
            ></div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.subContains}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5"> Contact Us</Typography>
            <hr style={{ margin: "0px" }} />
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "aquamarine"
              }}
            ></div>
          </Grid>
        </Grid>

        {/* <Grid item xs={12} sm={3} md={3}>
          <h1>About Pane</h1>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <h1>About Pane</h1>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <h1>About Pane</h1>
        </Grid> */}

        <Grid item xs={12} sm={12} md={12}>
          <div
            style={{
              width: "100%",
              minHeight: "400px",
              backgroundColor: "#584444",
              color: "white"
            }}
          >
            <h1>Footer</h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
