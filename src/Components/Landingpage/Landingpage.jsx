import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={4} md={4}>
        <Grid container style={{}}>
          <Grid item xs={12}>
            {/* <Paper className={classes.paper}></Paper> */}
            <Grid item xs={12}>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "aquamarine"
                }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Typography variant="body2">Nike airmax v2390</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Typography variant="body1">NGN 30 000</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Typography variant="caption">5 units (min. order)</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.button}
                  style={{
                    backgroundColor: "#FF5C00",
                    color: "white",
                    fontSize: "14px"
                  }}
                >
                  ADD TO CART
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
