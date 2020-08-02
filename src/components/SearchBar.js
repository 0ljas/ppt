import React, { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Link,
  IconButton,
  Slide,
  Grid,
} from "@material-ui/core";
import Radio from "./extends/WhiteRadio";
import {
  Search as SearchIcon,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
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
}));

const HideOnScroll = ({ children, hideCondition }) => (
  <Slide direction="left" in={!hideCondition}>
    {children}
  </Slide>
);

export default function SearchBar({ hideCondition }) {
  const ref = useRef(null);
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <HideOnScroll>
      <AppBar
        elevation={0}
        className={classes.root}
        ref={ref}
        position="sticky"
      >
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item container xs={4} justify="flex-start">
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
            </Grid>

            <Grid item xs={4} container justify="center">
              <div>
                <IconButton color="inherit">
                  <ChevronLeft />
                </IconButton>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  color="default"
                  size="small"
                />
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  color="default"
                  size="small"
                />
                <Radio
                  checked={selectedValue === "c"}
                  onChange={handleChange}
                  value="c"
                  color="default"
                  name="radio-button-demo"
                  size="small"
                />
                <IconButton color="inherit">
                  <ChevronRight />
                </IconButton>
              </div>
            </Grid>

            <Grid item xs={4}>
              <Typography className={classes.title} noWrap align="right">
                <Link href="#" color="inherit">
                  АВТОРИЗОВАТЬСЯ
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
