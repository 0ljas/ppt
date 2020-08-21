import React from "react";
import { Typography, Link } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "../../components/StandartContainer";
import Button from "../../components/extends/PPTButton";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  mb3: {
    marginBottom: theme.spacing(3),
  },
  mtAuto: {
    marginTop: "auto",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  heading: {
    padding: `${theme.spacing(1 / 2)}px ${theme.spacing(1)}px`,
    marginBottom: theme.spacing(1),
  },
  links: {
    display: "flex",
    flexDirection: "column",
    minHeight: 500,
    "& > a": {
      padding: `${theme.spacing(1 / 2)}px ${theme.spacing(1)}px`,
      display: "flex",
      justifyContent: "space-between",
    },

    "& > a:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.2),
    },
  },
}));

const NavLeft = ({ links, action }) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h6" className={classes.heading}>
        Разделы
      </Typography>

      <Typography className={classes.links}>
        {links.map((link) => (
          <Link underline="none" color="inherit" href="#">
            {link.label} <span className={classes.fwBold}>{link.count}</span>
          </Link>
        ))}

        {action && (
          <Button className={cx(classes.mtAuto, classes.mb3)}>
            Отфильтровать товар
          </Button>
        )}
      </Typography>
    </Container>
  );
};

export default NavLeft;
