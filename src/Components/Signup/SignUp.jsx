import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import bgm from "../Icons/DesktopBg.png";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#40c2f3",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "#40c2f3",
    boxShadow: "none",
  },
  textfield: {
    minWidth: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    "& .MuiInputBase-root": {
      border: "1px solid #40c2f3",
    },
  },
  forgotPassword: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center !important",
      alignItems: "center !important",
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "grey",
      fontSize: 10,
    },
    "& ::placeholder": { fontSize: "14px" },

    "&:hover": {
      borderColor: "#40c2f3",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important",
    },
    "& .MuiInput-underline:before": {
      borderColor: "#40c2f3",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderColor: "#40c2f3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        opacity: "60%",
      },
      "&:hover fieldset": {
        borderColor: "#40c2f3",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #40c2f3",
      },
    },
  },
})(TextField);

export default function SignUp() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url(${bgm})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "60px",
      }}
    >
      <Grid>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <CssTextField
                className={classes.textfield}
                size="small"
                variant="outlined"
                placeholder="Firstname"
                required
                fullWidth
                id="email"
                name="email"
                margin="normal"
                // value={values.email}
                // onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <CssTextField
                className={classes.textfield}
                size="small"
                variant="outlined"
                placeholder="Lastname"
                required
                fullWidth
                id="email"
                name="email"
                margin="normal"
                // value={values.email}
                // onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <CssTextField
                className={classes.textfield}
                size="small"
                variant="outlined"
                placeholder="Enter your email"
                required
                fullWidth
                id="email"
                name="email"
                margin="normal"
                autoComplete="email"
                autoFocus
              />
              <CssTextField
                className={classes.textfield}
                margin="normal"
                size="small"
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  style={{ display: "flex" }}
                  className={classes.forgotPassword}
                >
                  {/* <Link
                    href="#"
                    variant="caption"
                    style={{ color: "rgba(0,0,0,0.4)", textAlign: "left" }}
                  >
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item item xs={12} sm={6} md={6} mt={3}>
                  <Link
                    to="/login"
                    style={{
                      color: "rgba(0,0,0,0.4)",
                      textAlign: "left",
                      textDecoration: "none",
                    }}
                  >
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          {/* <Box mt={8}>
            <Copyright />
          </Box> */}
        </Container>
      </Grid>
    </div>
  );
}
