import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Logo from "../Icons/download.jpg"

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
  },
  mainContainer: {
    "@media screen and (max-width: 992px)": {
      padding: "10px"
    }
  }
}));

function ProductCard() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container style={{}}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}></Paper> */}
          <Grid item xs={12}>
            <div
              style={{
                width: "100%",
                height: "210px",
                backgroundColor: "aquamarine"
              }}
            >
              <img src={Logo} alt="background" width="100%" height="100%" />
            </div>
          </Grid>
          <Grid item xs={12} style={{ padding: "15px 0 15px 0" }}>
            <Grid container>
              <Typography
                variant="body2"
                style={{
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color:"rgba(0,0,0,0.7)"
                }}
              >
                Nike airmax
                v2390uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ padding: "0 0 8px 0" }}>
            <Grid container alignItems="center" style={{ color: "#FF5C00" }}>
              <LocationOnIcon style={{ fontSize: "11px" }} />
              <Typography variant="body1" style={{ fontSize: "11px" }}>
                {" "}
                University of ilorin
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ padding: "0 0 8px 0" }}>
            <Grid container>
              <StarBorderIcon
                style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)" }}
              />
              <StarBorderIcon
                style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)" }}
              />
              <StarBorderIcon
                style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)" }}
              />
              <StarBorderIcon
                style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)" }}
              />
              <StarBorderIcon
                style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)" }}
              />

              <Typography variant="body1"></Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ padding: "0 0 8px 0" }}>
            <Grid container alignItems="center">
              <Typography
                variant="caption"
                style={{
                  padding: "0 10px 0 0",
                  color: "rgba(0,0,0,0.4)",
                  fontSize: "12px"
                }}
              >
                From
              </Typography>
              <Typography variant="h5" style={{ fontSize: "18px" }}>
                &#8358;30000
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ padding: "0 0 8px 0" }}>
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
    </div>
  );
}

export default ProductCard;
