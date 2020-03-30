import React, { useEffect, useContext, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "grey",
      fontSize: 10
    },
    "& ::placeholder": { fontSize: "14px" },

    "&:hover": {
      borderColor: "#FF5C00"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important"
    },

    "& .MuiInput-underline:before": {
      borderColor: "#FF5C00"
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderColor: "#FF5C00"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        opacity: "60%"
      },
      "&:hover fieldset": {
        borderColor: "#FF5C00"
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #FF5C00"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  //   submit: {
  //     width: "100%",
  //     background: "#FF5C00",
  //     border: "none",
  //     outline: "none",
  //     padding: "1em",
  //     color: "#fff",
  //     fontSize: "1rem",
  //     "&:hover": {
  //       background: "#FF5C00"
  //     }
  //   },

  paper: {
    background: "#fff",

    width: "100%",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 20px !important",
      marginTop: "10px"
    }
  },
  mainContainer: {
    // padding: "10px 30px",
    flexGrow: 1,
    backgroundColor: "#E4E4E4",
    [theme.breakpoints.down("xs")]: {
      //padding: "0px 10px"
    }
  },

  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: "10px 0",
    boxShadow: "none"
  },
  textfield: {
    marginLeft: 0,
    backgroundColor: "#FAFAFA",
    borderRadius: "5px"
  },
  typography: {
    float: "left",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0 0 0 0",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px"
    }
  },

  formContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: "10px !important"
    }
  },

  formControl: {
    // margin: "-20px 0 -10px 0",
    minWidth: "100%",
    backgroundColor: "#FAFAFA",
    borderBottom: "none !important",
    borderRadius: "5px",
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important"
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none !important"
    }
  },
  select: {
    "& .MuiSelect-selectMenu": {
      height: "1.185rem"
    },
    "& .MuiInputBase-input": {
      padding: "12px 14px 7px 14px",
      display: "flex"
    }
  },
  formNames: {
    padding: "10px 0px"
  }
}));

function ContactDetailsForm({ onBack, onNext, onReset }) {
  const classes = useStyles();
  const [labelWidth] = React.useState(0);

  return (
    <>
      <Grid item xs={12} sm={12} md={12}>
        <Container
          component="main"
          maxWidth="sm"
          style={{ backgroundColor: "#fff", borderRadius: "10px" }}
        >
          <CssBaseline />
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h5"> Contact details </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Firstname
                </Typography>
                <CssTextField
                  variant="outlined"
                  size="small"
                  className={classes.textfield}
                  autoComplete="firstname"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  placeholder="Firstname"
                  autoFocus
                  //   value={values.firstname}
                  //   onChange={handleChange}
                  // onKeyUp={handleValidate}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Lastname
                </Typography>
                <CssTextField
                  variant="outlined"
                  size="small"
                  className={classes.textfield}
                  required
                  fullWidth
                  id="lastName"
                  placeholder="Lastname"
                  name="lastname"
                  //   value={values.lastname}
                  //   onChange={handleChange}
                  // onKeyUp={handleValidate}
                  autoComplete="lastname"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Email
                </Typography>
                <CssTextField
                  variant="outlined"
                  size="small"
                  className={classes.textfield}
                  required
                  fullWidth
                  id="email"
                  placeholder="Email"
                  name="email"
                  //   value={values.email}
                  //   onChange={handleChange}
                  // onKeyUp={handleValidate}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Phone Number
                </Typography>
                <CssTextField
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                  required
                  fullWidth
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  //   value={values.phone}
                  //   onChange={handleChange}
                  autoComplete="phone"
                  // onKeyUp={handleValidate}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Address
                </Typography>
                <CssTextField
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                  required
                  fullWidth
                  placeholder="Address"
                  type="text"
                  id="address-line"
                  name="address_line"
                  //   value={values.address_line}
                  //   onChange={handleChange}
                  // onKeyUp={handleValidate}
                  autoComplete="address_line"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4} sm={4} md={4} style={{ padding: "10px" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#FF5C00", color: "white" }}
                  className={classes.submit}
                  onClick={onBack}
                >
                  BACK
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ padding: "10px" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#FF5C00", color: "white" }}
                  className={classes.submit}
                  onClick={onNext}
                >
                  NEXT
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ padding: "10px" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#FF5C00", color: "white" }}
                  className={classes.submit}
                  onClick={onReset}
                >
                  RESET
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Grid>
    </>
  );
}

export default ContactDetailsForm;
