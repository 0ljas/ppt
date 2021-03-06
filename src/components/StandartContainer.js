import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(22),
    lineHeight: 1,
  },
  badge: {
    lineHeight: 1,
  },
}));

const StandartContainer = ({ children, title, badge }) => {
  const classes = useStyles();

  return (
    <Paper elevation={6} square className={classes.root}>
      {title && (
        <Typography variant="h5" component="h2" className={classes.title}>
          {title.toUpperCase()}
        </Typography>
      )}
      {badge && (
        <Typography variant="body1" className={classes.badge}>
          {badge}
        </Typography>
      )}
      {children}
    </Paper>
  );
};

export default StandartContainer;
