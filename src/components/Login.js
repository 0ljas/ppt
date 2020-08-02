import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tabs, Tab, Box, Paper, Divider } from "@material-ui/core";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 360,
  },
}));

export default function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper square elevation={10} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Войти" />
        <Tab label="Создать" />
      </Tabs>
      <Divider />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LoginForm />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SignupForm />
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}
