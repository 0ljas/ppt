import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";

const styles = (theme) => ({
  root: {
    borderWidth: 2,
    borderColor: "inherit",
    borderRadius: 0,
    fontStyle: "oblique",
  },
  inverse: {
    borderWidth: 2,
    borderColor: theme.palette.background.default,
    color: theme.palette.background.default,
    borderRadius: 0,
    fontStyle: "oblique",
  },
});

const PPTButton = (props) => {
  const { classes, children, className, inverse, ...other } = props;

  return (
    <Button
      size="large"
      variant="outlined"
      className={cx(inverse ? classes.inverse : classes.root, className)}
      {...other}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles)(PPTButton);
