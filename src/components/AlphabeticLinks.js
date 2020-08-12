import React from "react";
import { Typography, Link, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fsOblique: {
    fontStyle: "oblique",
  },
}));

const AlphabeticLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton style={{ padding: 4 }}>
        <StarBorderIcon />
      </IconButton>
      <Typography>
        <Link href="#" color="inherit">
          A
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          B
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          C
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          D
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          E
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          F
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          G
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          H
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          I
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          J
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          K
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          L
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          M
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          N
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          O
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          P
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          Q
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          R
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          S
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          T
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          U
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          V
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          W
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          X
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          Y
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          Z
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit" className={classes.fsOblique}>
          0-10
        </Link>
      </Typography>
    </div>
  );
};

export default AlphabeticLinks;
