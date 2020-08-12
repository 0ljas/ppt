import React from "react";
import {
  Grid,
  Paper,
  IconButton,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";
import StandartContainer from "./StandartContainer";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import cx from "classnames";
import AlphabeticLinks from "./AlphabeticLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > div:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
  p1: {
    padding: theme.spacing(1),
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  heading: {
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
    "& > button": {
      padding: theme.spacing(1 / 2),
    },
  },
}));

const BrandList = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} className={classes.root}>
        <Paper square elevation={6} className={classes.p1}>
          <FormControl fullWidth variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              className={classes.fsOblique}
            >
              Что вы хотите найти?
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={165}
            />
          </FormControl>
        </Paper>
        <StandartContainer>
          <Typography variant="h6" component="p" className={classes.heading}>
            Название раздела
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.heading, classes.mt2)}
          >
            Название раздела
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.heading, classes.mt2)}
          >
            Название раздела
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.heading, classes.mt2)}
          >
            Название раздела
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <Typography>
                  <Link href="#" color="inherit">
                    Название подраздела
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </StandartContainer>
        <StandartContainer>
          <AlphabeticLinks />
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.heading, classes.mt2)}
          >
            A
          </Typography>
          <Grid container>
            {Array.from(Array(4)).map((el, i) => (
              <Grid key={i} item xs={3}>
                {Array.from(Array(8)).map((el, idx) => (
                  <div key={idx} className={classes.dFlex}>
                    <IconButton>
                      <StarBorderIcon />
                    </IconButton>
                    <Typography>
                      <Link
                        href="#"
                        color="inherit"
                        className={classes.fsOblique}
                      >
                        Бренд нейм
                      </Link>
                    </Typography>
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.heading, classes.mt2)}
          >
            B
          </Typography>
          <Grid container>
            {Array.from(Array(4)).map((el, i) => (
              <Grid key={i} item xs={3}>
                {Array.from(Array(5)).map((el, idx) => (
                  <div key={idx} className={classes.dFlex}>
                    <IconButton>
                      <StarBorderIcon />
                    </IconButton>
                    <Typography>
                      <Link
                        href="#"
                        color="inherit"
                        className={classes.fsOblique}
                      >
                        Бренд нейм
                      </Link>
                    </Typography>
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default BrandList;
