import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import bgm from "../Icons/DesktopBg.png";
import mobileBg from "../Icons/mBgm.png";

import useSignupHook from "../Signup/useSignupHook";
import validateSignUp from "./ValidateSignUp";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
    marginTop: theme.spacing(2),
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
  eyeIcon: {
    "@media screen and (max-width: 416px) and (min-width: 0px)": {
      right: "-125px !important",
    },
    "@media screen and (max-width: 600px) and (min-width: 416px)": {
      right: "-170px !important",
    },
  },
  maiContainer: {
    backgroundImage: `url(${bgm})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "100px",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${mobileBg}) !important`,
    },
  },
  passwordField: {
    border: "1px solid #40c2f3",
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    width: "100%",
    "& label.Mui-focused": {
      color: "grey",
      fontSize: 10,
    },
    "& ::placeholder": { fontSize: "14px" },
    "&:hover": {
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
  const USER_INFO = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(USER_INFO);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const noErrors = Object.keys(validationError).length === 0;
      if (noErrors) {
        setIsSubmitted(true);
        console.log(values);
      } else {
        setIsSubmitted(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validationError]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateSignUp(values);
    setValidationError(validationError);
    setIsSubmitted(true);
    console.log(isSubmitted);
    console.log(validationError);
  };

  const classes = useStyles();

  const onClickPasswordIcon = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.maiContainer}>
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
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <CssTextField
                className={classes.textfield}
                size="small"
                variant="outlined"
                placeholder="Firstname"
                required
                fullWidth
                id="firstname"
                name="firstname"
                margin="normal"
                value={values.firstname}
                onChange={handleChange}
                autoComplete="firstname"
                autoFocus
              />
              {validationError.firstname && (
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    color: "red",
                    opacity: "0.7",
                  }}
                >
                  {validationError.firstname}
                </Grid>
              )}
              <CssTextField
                className={classes.textfield}
                size="small"
                variant="outlined"
                placeholder="Lastname"
                required
                fullWidth
                id="lastname"
                name="lastname"
                margin="normal"
                value={values.lastname}
                onChange={handleChange}
                autoComplete="lastname"
                autoFocus
              />
              {validationError.lastname && (
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    color: "red",
                    opacity: "0.7",
                  }}
                >
                  {validationError.lastname}
                </Grid>
              )}
              <CssTextField
                className={classes.textfield}
                size="small"
                variant="outlined"
                placeholder="Enter your email"
                required
                value={values.email}
                onChange={handleChange}
                fullWidth
                id="email"
                name="email"
                margin="normal"
                autoComplete="email"
                autoFocus
              />
              {validationError.email && (
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    color: "red",
                    opacity: "0.7",
                  }}
                >
                  {validationError.email}
                </Grid>
              )}
              <FormControl
                className={classes.passwordField}
                variant="outlined"
                size="small"
                margin="normal"
              >
                <OutlinedInput
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={onClickPasswordIcon}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {validationError.password && (
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    color: "red",
                    opacity: "0.7",
                  }}
                >
                  {validationError.password}
                </Grid>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                // disabled={isSubmitted}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item item xs={12} sm={12} md={12} mt={3}>
                  <Link
                    to="/login"
                    style={{
                      color: "rgba(0,0,0,0.4)",
                      textAlign: "left",
                      textDecoration: "none",
                      fontSize: "12px",
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
