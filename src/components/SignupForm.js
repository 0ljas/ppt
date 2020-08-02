import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  submitBtn: {
    marginTop: theme.spacing(3),
    borderWidth: 2,
    borderColor: "inherit",
    borderRadius: 0,
    fontStyle: "oblique",
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Ваше имя" />
      <TextField id="standard-basic1" label="Номер телефона" />
      <TextField id="standard-basic2" label="Пароль" />
      <TextField id="standard-basic3" label="Повторите пароль" />
      <Button
        type="submit"
        size="large"
        variant="outlined"
        className={classes.submitBtn}
      >
        Зарегестрироваться
      </Button>
    </form>
  );
};

export default SignupForm;
