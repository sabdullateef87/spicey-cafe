import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Banner from "../LandingPage2/Icons/Vasiti Seller Landing Page Banner 5.svg";
import Banner2 from "../Icons/Vasiti Seller Landing Page Banner 02 2.svg";
import icon1 from "../Icons/MoreMoney.svg";
import icon2 from "../Icons/ExclusiveAccess.svg";
import icon4 from "../Icons/UnlimitedSupport.svg";
import icon3 from "../Icons/Training.svg";
import vasitiLogo from "../Icons/Vasiti-Logo-black 1.png";
import whatYourShouldKnowIcon from "../Icons/what-you-icon.svg";
import jetImage from "../Icons/rocket-image.png";
import bg from "../Icons/apply-here-background.svg";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../Common/alice.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
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
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px 0px 10px"
    }
    //padding: "0 0 0 10px"
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
      fontSize: "14px !important"
    }
  },
  bottomInfo: {
    fontSize: "14px",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px"
    }
  },

  contents: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 12px"
    }
  },
  whatYourShouldKnowIcon: {
    [theme.breakpoints.down("xs")]: {
      //paddingTop: "20px"
    }
  },
  whatYourShouldKnowImage: {
    [theme.breakpoints.down("sm")]: {
      width: "120px !important",
      padding: "0 0 24px 0"
    }
  },
  whatYouShouldKnow: {
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column-reverse"
    }
  },
  applyNow: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important"
    }
  },
  vasitiLogo: {
    [theme.breakpoints.down("xs")]: {
      width: "150px !important"
    }
  },
  aliceCarousel: {},
  jetImageContain: {
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0px !important"
    }
  },
  jetImage: {
    [theme.breakpoints.down("sm")]: {
      width: "165px !important",
      padding: "0 0 24px 0",
      position: "inherit !important",
      top: "0 !important"
    }
  }
}));

export default function LandingPage2() {
  const classes = useStyles();
  const handleOnDragStart = e => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container>
        {/* header section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className={classes.header}
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* <Grid
            container
            className={classes.header}
            // alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <img
                src={vasitiLogo}
                alt="the best platform for students"
                className={classes.vasitiLogo}
              />
            </Grid>
          </Grid> */}
          <Grid container>
            <Grid item xs={2} sm={2} md={2}></Grid>
            <Grid item xs={12} sm={10} md={10}>
              <Grid container alignItems="center">
                <img
                  src={vasitiLogo}
                  alt="the best platform for students !!!!"
                  className={classes.vasitiLogo}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justify="space-around" style={{ paddingTop: "20px" }}>
          <Grid item xs={12} sm={8} md={8}>
            <Grid item xs={12} sm={12} md={12}>
              <AliceCarousel
                mouseTrackingEnabled
                fadeOutAnimation={true}
                autoPlay={true}
                duration={2500}
                buttonsDisabled={true}
                className={classes.aliceCarousel}
              >
                <div style={{ width: "100%" }}>
                  <img
                    src={Banner}
                    alt="banner"
                    width="100%"
                    onDragStart={handleOnDragStart}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <img
                    src={Banner2}
                    alt="banner"
                    width="100%"
                    onDragStart={handleOnDragStart}
                  />
                </div>
              </AliceCarousel>
            </Grid>

            <Grid className={classes.contents}>
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
                              Exclusive Access to Trusted Wholesaler
                            </Typography>
                            <Typography
                              style={{ fontSize: "14px" }}
                              className={classes.iconMessage}
                            >
                              Buy goods easily, quickly and at affordable prices
                              from trusted wholesalers across Nigeria.
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
                              Low After-Sales Commission
                            </Typography>
                            <Typography
                              style={{ fontSize: "14px" }}
                              className={classes.iconMessage}
                            >
                              You pay only a small commission after every
                              successful sale.
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
                              Funding Opportunities
                            </Typography>
                            <Typography
                              style={{ fontSize: "14px" }}
                              className={classes.iconMessage}
                            >
                              Get very-low interest loans from our
                              studentpreneur fund to grow your business. Be the
                              first to also know about funding opportunities for
                              you
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
                              Training, Mentorship and Internship
                            </Typography>
                            <Typography
                              style={{ fontSize: "14px" }}
                              className={classes.iconMessage}
                            >
                              Gain access to professionals to mentor you,
                              established business in your field where you can
                              intern and attend physical/virtual trainings
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
                                Fill all the required fields and follow the
                                steps to create your account
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
                              and services. You would be notified via email,
                              SMS, or on your dashboard once you have ordered.
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
                              we would provide you further support via
                              mentorship, internship and funding
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

              <Grid item xs={12} sm={12} md={12}>
                <Grid
                  container
                  justify="space-around"
                  style={{
                    backgroundColor: "#FBEAE2",
                    borderRadius: "10px",
                    padding: "30px 10px"
                  }}
                  className={classes.whatYouShouldKnow}
                >
                  <Grid item xs={12} sm={7} md={7}>
                    <Grid container style={{ textAlign: "left" }}>
                      <Grid item xs={12}>
                        <Typography className={classes.topInfo}>
                          We Want Happy Customers
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.bottomInfo}>
                          We want our buyers to be very happy so we expect you
                          to sell only authentic products, upload exact images
                          and use an accurate description
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      style={{ textAlign: "left", paddingTop: "20px" }}
                    >
                      <Grid item xs={12}>
                        <Typography className={classes.topInfo}>
                          We Offer Super-Fast Delivery
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.bottomInfo}>
                          Please ensure products are available on standby before
                          you upload to the site so it can quickly be picked up
                          and delivered.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Hidden xsDown>
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={4}
                      className={classes.whatYourShouldKnowIcon}
                    >
                      <img
                        src={whatYourShouldKnowIcon}
                        className={classes.whatYourShouldKnowImage}
                        alt="what you shouldd know"
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </Grid>
              <Grid
                style={{ padding: "75px 0px" }}
                className={classes.jetImageContain}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  style={{
                    backgroundImage: `url(${bg})`,
                    //height: "240px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "10px",
                    padding: "40px 0 40px 30px"
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={7} md={7}>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            style={{
                              color: "white",
                              fontSize: "24px",
                              textAlign: "left",
                              padding: "0px 0 20px 0"
                            }}
                            className={classes.topInfo}
                          >
                            Are you truly passionate about making money <br />
                            on campus and growing your business?
                          </Typography>
                          <Button
                            variant="contained"
                            style={{
                              display: "flex",
                              backgroundColor: "white",
                              boxShadow: "none",
                              color: "#FF5C01",
                              fontWeight: "bold",
                              fontSize: "17px"
                            }}
                            className={classes.applyNow}
                          >
                            SIGN UP NOW
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Hidden xsDown>
                      <Grid item xs={12} sm={4} md={4}>
                        <div style={{ width: "100%", height: "200px" }}>
                          <img
                            src={jetImage}
                            alt="jet"
                            style={{ position: "relative", top: "-80px" }}
                            className={classes.jetImage}
                          />
                        </div>
                      </Grid>
                    </Hidden>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </Grid>
          <Grid item xs={12} sm={12} sm={12}>
            <Grid
              container
              style={{
                backgroundColor: "#3f3f3f",
                height: "321px",
                color: "White"
              }}
              justify="center"
              alignItems="center"
            >
              <Typography variant="h5">Footer</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
