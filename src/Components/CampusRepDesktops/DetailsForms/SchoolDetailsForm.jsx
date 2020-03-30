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
import states from "../../Functions/statesArray";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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
    margin: "20px 0",
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
    fontSize: "12px",
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
      display: "flex",
      fontSize: "12px"
    }
  },
  formNames: {
    padding: "10px 0px"
  },
  menuItems: {
    fontSize: "0.7rem"
  }
}));

function SchoolDetailsForm({ onBack, onNext, onReset }) {
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
                <Typography variant="h5"> School details </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography
                  variant="body2"
                  className={classes.typography}
                  //style={{ color: values.oncampus == "yes" ? "black" : "#f8f8f8" }}
                >
                  Select campus
                </Typography>
                <FormControl
                  size="small"
                  className={classes.formControl}
                  style={{ marginTop: "0.9px", marginLeft: "-2px" }}
                >
                  <Select
                    labelId="institution"
                    id="demo-simple-select-outlined"
                    name="campus"
                    defaultValue="placeholder"
                    //value={values.oncampus == "yes" ? values.institution : ""}
                    //disabled={values.oncampus == "yes" ? false : true}
                    //onChange={handleChange}
                    labelWidth={labelWidth}
                    className={classes.select}
                  >
                    <MenuItem
                      value="placeholder"
                      className={classes.menuItems}
                      disabled
                    >
                      <Typography
                        style={{ fontSize: "14px", color: "rgba(0,0,0,0.35)" }}
                      >
                        Select your campus
                      </Typography>
                    </MenuItem>
                    <MenuItem value="convenant" className={classes.menuItems}>
                      Covenant
                    </MenuItem>
                    <MenuItem
                      value="University of Lagos"
                      className={classes.menuItems}
                    >
                      University of Lagos
                    </MenuItem>
                    <MenuItem
                      value="University of Ibadan"
                      className={classes.menuItems}
                    >
                      University of Ibadan
                    </MenuItem>
                    <MenuItem
                      value="Babcock University"
                      className={classes.menuItems}
                    >
                      Babcock University
                    </MenuItem>
                    <MenuItem
                      value="Bells University"
                      className={classes.menuItems}
                    >
                      Bells University
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Faculty/Department
                </Typography>
                <CssTextField
                  variant="outlined"
                  size="small"
                  className={classes.textfield}
                  required
                  fullWidth
                  id="lastName"
                  placeholder="Faculty/Department"
                  name="lastname"
                  //   value={values.lastname}
                  //   onChange={handleChange}
                  // onKeyUp={handleValidate}
                  autoComplete="lastname"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="body2"
                  className={classes.typography}
                  //style={{ color: values.oncampus == "yes" ? "black" : "#f8f8f8" }}
                >
                  Level
                </Typography>
                <FormControl
                  size="small"
                  className={classes.formControl}
                  style={{ marginTop: "0.9px", marginLeft: "-2px" }}
                >
                  <Select
                    labelId="institution"
                    id="demo-simple-select-outlined"
                    name="institution"
                    defaultValue="placeholder"
                    //value={values.oncampus == "yes" ? values.institution : ""}
                    //disabled={values.oncampus == "yes" ? false : true}
                    //onChange={handleChange}
                    labelWidth={labelWidth}
                    className={classes.select}
                  >
                    <MenuItem value="placeholder" disabled>
                      <Typography
                        style={{ fontSize: "14px", color: "rgba(0,0,0,0.35)" }}
                      >
                        Select your level
                      </Typography>
                    </MenuItem>
                    <MenuItem value="100" className={classes.menuItems}>
                      100
                    </MenuItem>
                    <MenuItem value="200" className={classes.menuItems}>
                      200
                    </MenuItem>
                    <MenuItem value="300" className={classes.menuItems}>
                      300
                    </MenuItem>
                    <MenuItem value="400" className={classes.menuItems}>
                      400
                    </MenuItem>
                    <MenuItem value="500" className={classes.menuItems}>
                      500
                    </MenuItem>
                    <MenuItem value="600" className={classes.menuItems}>
                      600
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Address around school
                </Typography>
                <CssTextField
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                  required
                  fullWidth
                  id="addressAroundSxhool"
                  placeholder="Address around School"
                  name="addressAroundSchool"
                  //   value={values.phone}
                  //   onChange={handleChange}
                  autoComplete="addressAroundSchool"
                  // onKeyUp={handleValidate}
                />
              </Grid>
              

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Select state
                </Typography>
                <FormControl
                  size="small"
                  className={classes.formControl}
                  style={{ marginTop: "0.9px", marginLeft: "-2px" }}
                >
                  <Select
                    labelId="institution"
                    id="demo-simple-select-outlined"
                    name="institution"
                    defaultValue="state"
                    //value={values.oncampus == "yes" ? values.institution : ""}
                    //disabled={values.oncampus == "yes" ? false : true}
                    //onChange={handleChange}
                    labelWidth={labelWidth}
                    className={classes.select}
                  >
                    <MenuItem
                      value="state"
                      className={classes.menuItems}
                      disabled
                    >
                      <Typography
                        style={{ fontSize: "14px", color: "rgba(0,0,0,0.35)" }}
                      >
                        Select state
                      </Typography>
                    </MenuItem>

                    {states.map((state, index) => {
                      return (
                        <MenuItem
                          value={state}
                          className={classes.menuItems}
                          key={index}
                        >
                          {state}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  Skills
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={3}
                  placeholder="Leadership skills, Communication, etc."
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "#FAFAFA",
                    borderRadius: "10px",
                    padding: "10px"
                  }}
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

export default SchoolDetailsForm;
