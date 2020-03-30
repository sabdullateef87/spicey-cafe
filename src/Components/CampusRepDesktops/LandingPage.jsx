import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import happyGirl from "../imagesAndIcons/happy-girl-web 1.svg";
import iconsObj from "../Functions/benefitIcons";
import exportVasitiCamp from "../imagesAndIcons/Vasiti camp rep 004 1.svg";
import ApplyNow from "../imagesAndIcons/apply-here-background.svg";
import banner from "../imagesAndIcons/campusrepBanner1.svg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import noLookFurther from "../imagesAndIcons/look-no-further-road-sign 4.svg";

import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
    // boxShadow:"none",
  },
  topPane: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    height: "40px"
    //marginBottom: "28px"
  },
  containers: {
    padding: "46px 0 0 53px",

    margin: "39px 0 0 0",
    // borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      padding: "20px !important"
    }
  },
  aboutVasitiContainer: {
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    padding: "46px 0px 0 53px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px !important"
    }
  },
  figureCap: {
    backgroundColor: "#FFFFFF",
    height: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "244px"
  },
  footer: {
    backgroundColor: "#3f3f3f",
    height: "300px"
  },
  icon: {
    color: "#FF5C00",
    width: "9px",
    height: "9px"
  },
  ul: {
    //listStyle: "none",
    "& li::before": {
      color: "red !important",
      width: "1em"
    }
  },
  li: {
    "& ::before": {
      backgroundColor: "red !important"
    }
  },
  listItemAvatar: {
    minWidth: "25px"
  }
}));

const icons = [{}];

function LandingPage() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.topPane}></Paper>
        </Grid>
        <Grid
          container
          justify="space-around"
          style={{ backgroundColor: "#E5E5E5", padding: "25px 0 32px 0" }}
        >
          <Grid item xs={10}>
            <Grid container>
              {/* slider pane */}
              <Grid item xs={12} sm={12} md={12}>
                <div
                  style={{
                    // paddingBottom: "41px",
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "400px",
                    marginBottom: "20px"
                  }}
                ></div>
              </Grid>

              {/* about vasiti pane */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.aboutVasitiContainer}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <Typography
                        variant="h5"
                        style={{
                          padding: "10px 0px",
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#FD5C01"
                        }}
                      >
                        About Vasiti Campus Rep
                      </Typography>
                      <Typography variant="body2">
                        Vasiti Campus Reps are amazing students who are Vasiti
                        representatives in their school. They are our eyes,
                        ears, hands and legs on various campus. They love the
                        Vasiti brand and we love them right back!
                      </Typography>
                    </div>
                  </Grid>
                  <Hidden xsDown>
                    <Grid item xs={12} sm={6} md={6}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img src={happyGirl} alt="About vasiti campus rep" />
                      </div>
                    </Grid>
                  </Hidden>
                </Grid>
              </Grid>

              {/* benefit of beign a vasiti campus rep pane */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                style={{ padding: "30px 0px 20px 0px" }}
              >
                <Typography
                  variant="h5"
                  style={{
                    padding: "10px 0px",
                    fontSize: "24px",
                    fontWeight: "bold"
                  }}
                >
                  Benefits of Being a Vasiti Campus Rep
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  {iconsObj.map((element, index) => {
                    return (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        key={index}
                        style={{
                          padding: "10px"
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            height: "200px"
                          }}
                        >
                          <div>
                            <img
                              src={element.icon}
                              alt="icococococo"
                              style={{ color: "blue" }}
                            />
                          </div>
                          <div>
                            <Typography variant="caption">
                              {element.name}
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>

              {/* duties of vasiti campus rep pane */}
              <Grid item xs={12} sm={12} md={12} className={classes.containers}>
                <Grid container>
                  <Hidden xsDown>
                    <Grid item xs={12} sm={7} md={5}>
                      <div style={{ display: "flex" }}>
                        <img
                          src={exportVasitiCamp}
                          alt="duties of vasiti camous rep"
                        />
                      </div>
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} sm={5} md={7}>
                    <div style={{ textAlign: "left" }}>
                      <Typography
                        variant="h5"
                        style={{
                          padding: "10px 0px",
                          fontSize: "24px",
                          fontWeight: "bold"
                        }}
                      >
                        Duties of a Vasiti Campus Rep
                      </Typography>
                      <List className={classes.root}>
                        <ListItem>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <FiberManualRecordIcon className={classes.icon} />
                          </ListItemAvatar>
                          Onboard Students Entrepreneurs
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <FiberManualRecordIcon className={classes.icon} />
                          </ListItemAvatar>
                          Aggressively promote the brand online and offline
                        </ListItem>

                        <ListItem className={classes.listItemAvatar}>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <FiberManualRecordIcon className={classes.icon} />
                          </ListItemAvatar>
                          Get students to join the Vasiti community and shop on
                          Vasiti
                        </ListItem>
                        <ListItem className={classes.listItemAvatar}>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <FiberManualRecordIcon className={classes.icon} />
                          </ListItemAvatar>
                          Oversee on-campus logistics including handling,
                          delivery e.t.c
                        </ListItem>
                        <ListItem className={classes.listItemAvatar}>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <FiberManualRecordIcon className={classes.icon} />
                          </ListItemAvatar>
                          Help to organize campus events
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              {/* skills and competencies neede */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.containers}
                style={{ paddingBottom: "41px" }}
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography
                      variant="h5"
                      style={{
                        padding: "10px 0px",
                        fontSize: "24px",
                        fontWeight: "bold"
                      }}
                    >
                      Skills and Competencies Needed
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}></Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="caption">
                      Great selling skills with a passion for sales Attention to
                      details with ability to multitask. Result-oriented and
                      innovative. Hardworking, energetic and highly organized
                      team player Excellent communication skills with an ability
                      to influence others. Innovative, Creative and Social media
                      savvy Result-oriented, able to work under pressure, meet
                      deadlines and influence others.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.containers}
                style={{
                  paddingBottom: "41px",
                  backgroundImage: `url(${ApplyNow})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography
                      variant="h5"
                      style={{
                        padding: "10px 0px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "white"
                      }}
                    >
                      Are you amazing enough to join our team of campus reps?
                    </Typography>
                    <Button
                      style={{
                        backgroundColor: "#C4C4C4",
                        color: "#FFFFFF",
                        borderRadius: "none !important",
                        boxShadow: "none",
                        borderRadius: "none",
                        backgroundColor: "#FFFFFF",
                        color: "#FF5C01"
                      }}
                    >
                      APPLY HERE
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div>
                      <img src={noLookFurther} alt="No look further road" />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.footer}></Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
