import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./extends/PPTButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
      <TextField id="standard-basic1" label="Номер телефона" />
      <TextField id="standard-basic2" label="Пароль" />
      <Button type="submit" className={classes.mt3}>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
