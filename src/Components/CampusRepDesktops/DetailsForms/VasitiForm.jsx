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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

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
  },
  radio: {
    "& .MuiSvgIcon-root": {
      fontSize: "0.6em"
    },
    "&.MuiRadio-colorSecondary.Mui-checked": {
      color: "#FF5C00"
    }
  },
  labelFormControlRadio: {
    "& .MuiTypography-body1": {
      fontSize: "0.7rem"
    }
  }
}));
const mediums = [
  "Facebook",
  "Instagram",
  "Twitter",
  "Google",
  "Email",
  "Referral",
  "Website"
];
function VasitiForm({ onBack, onNext, onReset }) {
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
                <Typography variant="h5"> Vasiti </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  * Why do you want to become a vasiti campus rep ?
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={3}
                  placeholder=""
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "#FAFAFA",

                    padding: "10px"
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  * Do you understand that this is a job and not a voluntary
                  role ?
                </Typography>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  style={{ backgroundColor: "white" }}
                >
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    //   value={value}
                    //   onChange={handleChange}
                  >
                    <FormControlLabel
                      className={classes.labelFormControlRadio}
                      value="yes"
                      control={<Radio className={classes.radio} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      className={classes.labelFormControlRadio}
                      value="no"
                      control={<Radio className={classes.radio} />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  * Are you currently an ambassador in any organisation ?
                </Typography>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  style={{ backgroundColor: "white" }}
                >
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    //   value={value}
                    //   onChange={handleChange}
                  >
                    <FormControlLabel
                      className={classes.labelFormControlRadio}
                      value="yes"
                      control={<Radio className={classes.radio} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      className={classes.labelFormControlRadio}
                      value="no"
                      control={<Radio className={classes.radio} />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  * If yes, list the organisation(s)
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={3}
                  placeholder=""
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "#FAFAFA",

                    padding: "10px"
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  * Have you currently worked as an ambassador in any
                  organisation ?
                </Typography>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  style={{ backgroundColor: "white" }}
                >
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    //   value={value}
                    //   onChange={handleChange}
                  >
                    <FormControlLabel
                      className={classes.labelFormControlRadio}
                      value="yes"
                      control={<Radio className={classes.radio} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      className={classes.labelFormControlRadio}
                      value="no"
                      control={<Radio className={classes.radio} />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" className={classes.typography}>
                  * If yes, list the organisation(s)
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={3}
                  placeholder=""
                  style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "#FAFAFA",

                    padding: "10px"
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography
                  variant="body2"
                  className={classes.typography}
                  //style={{ color: values.oncampus == "yes" ? "black" : "#f8f8f8" }}
                >
                  How did you hear about us ?
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
                        Facebook
                      </Typography>
                    </MenuItem>

                    {mediums.map((medium, index) => {
                      return (
                        <MenuItem value={medium} className={classes.menuItems}>
                          {medium}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" className={classes.typography}>
                  Refferal Code
                </Typography>
                <CssTextField
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                  required
                  fullWidth
                  id="refferalcode"
                  placeholder="Refferal Code"
                  name="refferalcode"
                  //   value={values.phone}
                  //   onChange={handleChange}
                  autoComplete="addressAroundSchool"
                  // onKeyUp={handleValidate}
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

export default VasitiForm;
