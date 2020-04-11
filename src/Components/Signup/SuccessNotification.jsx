import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import successIcon from "../Icons/success-png-icon-7.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SuccessNotification() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          {/* <Paper className={classes.paper}> */}
          <Grid container>
            <Grid item xs={12} sm={12} ms={12}>
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
              >
                <div>
                  <img
                    src={successIcon}
                    alt="user created successfully"
                    width="200px"
                    height="200px"
                  />
                </div>
                <Typography style={{ color: "#000000" }}>
                  User Successfully created
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
