import React, { useState, useRef, useEffect } from "react";
import {
  Paper,
  Typography,
  Link,
  Button,
  ButtonGroup,
  Grid,
  InputBase,
  IconButton,
} from "@material-ui/core";
import {
  Search as SearchIcon,
  LockRounded,
  PersonRounded,
  StarRounded,
} from "@material-ui/icons";
import { makeStyles, fade } from "@material-ui/core/styles";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    marginTop: -193,
    width: "100%",
    minHeight: 129,
    padding: `${theme.spacing(2)}px 0`,
    zIndex: 1101,
  },
  logo: {
    fontWeight: theme.typography.fontWeightBold,
  },
  links: {
    "& > a": {
      color: "inherit",
      fontStyle: "oblique",
      fontSize: 18,
    },
  },
  grid: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  // search input
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  loginLink: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  gutterBottom: {
    marginBottom: `${theme.spacing(1)}px`,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const navbarRef = useRef(null);
  const [sticked, setSticked] = useState(false);
  const bull = <span className={classes.bullet}>•</span>;
  const handleScroll = (el) => {
    const { top } = el.getBoundingClientRect();
    if (top === 0) {
      setSticked(true);
    } else {
      setSticked(false);
    }
  };

  useEffect(() => {
    const domNode = navbarRef.current;
    window.addEventListener("scroll", () => handleScroll(domNode), true);

    return () => {
      window.removeEventListener("scroll", () => handleScroll(domNode));
    };
  }, [navbarRef]);

  return (
    <Paper square elevation={0} className={classes.root} ref={navbarRef}>
      <Grid
        container
        alignItems="center"
        className={cx(classes.grid, classes.gutterBottom)}
      >
        <Grid item xs={3} lg={4}>
          {sticked && (
            <ButtonGroup color="inherit" size="small" variant="text">
              <Button>RU</Button>
              <Button>EN</Button>
              <Button>QZ</Button>
            </ButtonGroup>
          )}
        </Grid>
        <Grid item xs={6} lg={4}>
          <Typography variant="h4" className={classes.logo} align="center">
            TRIUMPH PRET{bull}A{bull}PORTER
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={3}
          lg={4}
          justify="flex-end"
          alignItems="center"
        >
          {sticked && (
            <>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Поиск…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>

              <Typography className={classes.loginLink} noWrap align="right">
                <Link href="#" color="inherit">
                  АВТОРИЗОВАТЬСЯ
                </Link>
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
      <Grid container alignItems="center" className={classes.grid}>
        <Grid item xs={3}>
          {!sticked && (
            <ButtonGroup color="inherit" size="small" variant="text">
              <Button>RU</Button>
              <Button>EN</Button>
              <Button>QZ</Button>
            </ButtonGroup>
          )}
        </Grid>
        <Grid
          container
          item
          xs={6}
          justify="space-between"
          className={classes.links}
        >
          <Link href="#">ГЛАВНАЯ</Link>
          <Link href="#">КАТАЛОГ</Link>
          <Link href="#">ДЛЯ НЕГО</Link>
          <Link href="#">ДЛЯ НЕЁ</Link>
          <Link href="#">OUTLET</Link>
        </Grid>
        <Grid container item xs={3} justify="flex-end" alignItems="center">
          {sticked && (
            <div>
              <IconButton>
                <PersonRounded />
              </IconButton>
              <IconButton>
                <StarRounded />
              </IconButton>
              <IconButton>
                <LockRounded />
              </IconButton>
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NavBar;
