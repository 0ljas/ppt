import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Olzhas Kuanov
        </Typography>
        <Box>
          <Typography>Shalom!</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
