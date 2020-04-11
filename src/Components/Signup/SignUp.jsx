import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import SuccessNotification from "./SuccessNotification";
import FailureNotification from "./FailureNotification";
import bgm from "../Icons/DesktopBg.png";
import mobileBg from "../Icons/mBgm.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import useSignupHook from "../Signup/useSignupHook";
import validateSignUp from "./ValidateSignUp";

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
    paddingTop: "50px",
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
  const [validationError, setValidationError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    meassage: "",
    error: "",
  });

  const [open, setOpen] = React.useState(false);

  let history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateSignUp(values);
    setValidationError(validationError);
    if (Object.keys(validationError).length === 0) {
      axios
        .post("http://localhost:4000/user/register", values)
        .then((response) => {
          console.log(response.data.message, response.data.error);
          setData({
            ...data,
            message: response.data.message,
            error: response.data.status,
          });
          setOpen(true);
        })

        .catch((err) => {
          console.log(err);
        });
    } else if (Object.keys(validationError).length !== 0) {
      console.log("Error still persist");
    }
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
                    textAlign: "left",
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

          {data.error === "Failed" ? (
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              fullWidth
            >
              <Grid container justify="flex-end">
                <CloseIcon
                  onClick={handleClose}
                  style={{ color: "black" }}
                ></CloseIcon>
              </Grid>
              <DialogContent>
                <FailureNotification />
              </DialogContent>
              <DialogActions>
                <Grid container justify="flex-end">
                  <Button
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#40c2f3" }}
                  >
                    Proceed to login
                  </Button>
                </Grid>
              </DialogActions>
            </Dialog>
          ) : (
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              fullWidth
            >
              <Grid container justify="flex-end">
                <CloseIcon
                  onClick={handleClose}
                  style={{ color: "black" }}
                ></CloseIcon>
              </Grid>
              <DialogContent>
                <SuccessNotification />
              </DialogContent>
              <DialogActions>
                <Grid container justify="flex-end">
                  <Button
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#40c2f3" }}
                  >
                    Proceed to login
                  </Button>
                </Grid>
              </DialogActions>
            </Dialog>
          )}
        </Container>
      </Grid>
    </div>
  );
}
