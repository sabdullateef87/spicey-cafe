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
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import AnnouncementIcon from "@material-ui/icons/Announcement";

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
  drawer: {
    "& .MuiDrawer-paper": {
      width: "300px",
      backgroundColor: "#4b1919",
      color: "white"
    }
  },
  title: {
    fontFamily: "cursive"
  },
  login: {
    transition: "ease-in-out 1s",
    "& :hover": {
      display: "block"
    }
  },
  icons:{
    
  }
}));

function Navbar() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpen = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };

  const navArray = [
    {
      name: "Home",
      icon: <HomeIcon />
    },
    {
      name: "Kitchen",
      icon: <KitchenIcon />
    },
    {
      name: "About Us",
      icon: <InfoIcon />
    },
    {
      name: "Contact Us",
      icon: <ContactMailIcon />
    },
    {
      name: "Gallery",
      icon: <WallpaperIcon />
    },
    {
      name: "News",
      icon: <AnnouncementIcon />
    }
  ];

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}

      <List>
        {navArray.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "whitesmoke" }}>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid item xs={12} sm={3} md={3}>
            <Grid container alignItems="center">
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={handleOpen}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                Spicey
              </Typography>
            </Grid>
          </Grid>

          <Hidden xsDown>
            <Grid item xs={8} sm={8} md={8}>
              <Button>Home</Button>
              <Button>Home</Button>
              <Button>Home</Button>
            </Grid>
          </Hidden>

          <Button
            color="inherit"
            style={{ fontSize: "10px" }}
            className={classes.login}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            className={classes.drawer}
            style={{ color: "white" }}
            variant="temporary"
            // anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Navbar;
