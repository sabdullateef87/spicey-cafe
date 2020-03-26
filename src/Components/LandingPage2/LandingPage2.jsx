import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Banner from "../LandingPage2/Icons/Vasiti Seller Landing Page Banner 5.svg";
import icon1 from "../Icons/MoreMoney.svg";
import icon2 from "../Icons/ExclusiveAccess.svg";
import icon4 from "../Icons/UnlimitedSupport.svg";
import icon3 from "../Icons/Training.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#E5E5E5",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "white "
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  header: {
    boxShadow: "none",
    height: "80px",
    backgroundColor: "white"
  },
  benefit: {
    fontWeight: "bold",
    padding: "64px 0px 24px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 10px 0px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      padding: "20px 0px 10px 0px"
    }
  },
  why: {
    borderRadius: "10px",
    backgroundColor: "white",
    minHeight: "850px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0px"
    }
  },
  iconContainer: {
    padding: "50px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px"
    }
  },
  icons: {
    [theme.breakpoints.down("xs")]: {
      width: "50px"
    }
  },
  iconHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important"
    }
  },
  iconMessage: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important"
    }
  },
  whyHeader: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  howItWorksPanes: {
    padding: "30px 0px",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around !important",
      padding: "20px 0px"
    }
  },

  howItWorksInfo: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center"
  },
  topInfo: {
    color: "#FF5C00",
    fontWeight: "bold",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px"
    }
  },
  bottomInfo: {
    fontSize: "14px",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px"
    }
  }
}));

export default function LandingPage2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {/* header section */}
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className={classes.header}>
            <Typography variant="h5">Logo</Typography>
          </Grid>
        </Grid>

        <Grid container justify="space-around" style={{ paddingTop: "20px" }}>
          <Grid item xs={12} sm={8} md={8}>
            <Grid item xs={12} sm={12} md={12}>
              <div style={{ width: "100%" }}>
                <img src={Banner} alt="banner" width="100%" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container className={classes.whyHeader}>
                <Typography variant="h5" className={classes.benefit}>
                  Why You Should Sell On Vasiti
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container className={classes.why} justify="space-around">
                <Grid item xs={10} sm={10} md={10}>
                  <Grid container justify="space-between">
                    <Grid item xs={12} sm={5} md={5}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.iconContainer}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <img
                            src={icon1}
                            alt="More money"
                            className={classes.icons}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            className={classes.iconHeader}
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              padding: "5px 0px"
                            }}
                          >
                            More Customers, More Money
                          </Typography>
                          <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.iconMessage}
                          >
                            Sell to thousands buyers on your campus, on other
                            campuses and everywhere else.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.iconContainer}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <img
                            src={icon2}
                            alt="More money"
                            className={classes.icons}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            className={classes.iconHeader}
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              padding: "5px 0px"
                            }}
                          >
                            More Customers, More Money
                          </Typography>
                          <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.iconMessage}
                          >
                            Sell to thousands buyers on your campus, on other
                            campuses and everywhere else.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.iconContainer}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <img
                            src={icon1}
                            alt="More money"
                            className={classes.icons}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            className={classes.iconHeader}
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              padding: "5px 0px"
                            }}
                          >
                            More Customers, More Money
                          </Typography>
                          <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.iconMessage}
                          >
                            Sell to thousands buyers on your campus, on other
                            campuses and everywhere else.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.iconContainer}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <img
                            src={icon1}
                            alt="More money"
                            className={classes.icons}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            className={classes.iconHeader}
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              padding: "5px 0px"
                            }}
                          >
                            More Customers, More Money
                          </Typography>
                          <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.iconMessage}
                          >
                            Sell to thousands buyers on your campus, on other
                            campuses and everywhere else.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.iconContainer}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <img
                            src={icon3}
                            alt="More money"
                            className={classes.icons}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            className={classes.iconHeader}
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              padding: "5px 0px"
                            }}
                          >
                            More Customers, More Money
                          </Typography>
                          <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.iconMessage}
                          >
                            Sell to thousands buyers on your campus, on other
                            campuses and everywhere else.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5}>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.iconContainer}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <img
                            src={icon4}
                            alt="More money"
                            className={classes.icons}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            className={classes.iconHeader}
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              padding: "5px 0px"
                            }}
                          >
                            More Customers, More Money
                          </Typography>
                          <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.iconMessage}
                          >
                            Sell to thousands buyers on your campus, on other
                            campuses and everywhere else.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container className={classes.whyHeader}>
                <Typography variant="h5" className={classes.benefit}>
                  How it Works
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid style={{ paddingBottom: "24px" }}>
                <Grid
                  container
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container className={classes.howItWorksPanes}>
                      <Grid item xs={2} sm={2} md={2}>
                        <Typography
                          style={{ fontSize: "72px", color: "#D5D5D5" }}
                        >
                          1
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        sm={8}
                        md={8}
                        className={classes.howItWorksInfo}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography className={classes.topInfo}>
                              Create a free account
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className={classes.bottomInfo}>
                              Fill all the required fields and follow the steps
                              to create your account
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid style={{ paddingBottom: "24px" }}>
                <Grid
                  container
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container className={classes.howItWorksPanes}>
                      <Grid item xs={2} sm={2} md={2}>
                        <Typography
                          style={{ fontSize: "72px", color: "#D5D5D5" }}
                        >
                          2
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        sm={8}
                        md={8}
                        className={classes.howItWorksInfo}
                      >
                        <Grid container>
                          <Typography className={classes.topInfo}>
                            Login and Update Your Store
                          </Typography>
                          <Typography className={classes.bottomInfo}>
                            Upload clear and exact images of all you products
                            and services. You would be notified via email, SMS,
                            or on your dashboard once you have ordered.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid style={{ paddingBottom: "24px" }}>
                <Grid
                  container
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container className={classes.howItWorksPanes}>
                      <Grid item xs={2} sm={2} md={2}>
                        <Typography
                          style={{ fontSize: "72px", color: "#D5D5D5" }}
                        >
                          3
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        sm={8}
                        md={8}
                        className={classes.howItWorksInfo}
                      >
                        <Grid container>
                          <Typography className={classes.topInfo}>
                            Fulfill Your Orders
                          </Typography>
                          <Typography className={classes.bottomInfo}>
                            People everywhere would buy your products or hire
                            your services.You would be notified via email, SMS
                            or on your dashboard once you have an order
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  container
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container className={classes.howItWorksPanes}>
                      <Grid item xs={2} sm={2} md={2}>
                        <Typography
                          style={{ fontSize: "72px", color: "#D5D5D5" }}
                        >
                          4
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        sm={8}
                        md={8}
                        className={classes.howItWorksInfo}
                      >
                        <Grid container>
                          <Typography className={classes.topInfo}>
                            Grow Your Profile and Gain More Benefits
                          </Typography>
                          <Typography className={classes.bottomInfo}>
                            As you efficiently manage your business on Vasiti,
                            we would provide you further support via mentorship,
                            internship and funding
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container className={classes.whyHeader}>
                <Typography variant="h5" className={classes.benefit}>
                  What You Should Know
                </Typography>
              </Grid>
            </Grid>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
