import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { Add, Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {},
  fsOblique: {
    fontStyle: "oblique",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  mr1: {
    marginRight: theme.spacing(1),
  },
  date: {
    fontSize: theme.typography.pxToRem(15),
    padding: `${theme.spacing(1 / 2)}px ${theme.spacing(1)}px`,
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.background.default,
    borderRadius: 20,
  },
  dialogHeader: {
    display: "flex",
    alignItems: "center",
    "& > span": {
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.text.secondary,
    },
  },
  dialogContent: {
    marginBottom: theme.spacing(2),
    "& > p": {
      fontStyle: "oblique",
    },
  },
  toolbar: {
    padding: 0,
    marginTop: theme.spacing(3),
  },
}));

const Chat = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="Диалог по заказу">
          <Typography
            component="span"
            className={cx(classes.fsOblique, classes.mr1)}
          >
            Короткое синее платье
          </Typography>
          <Typography component="span" className={classes.fwBold}>
            от GUCCI
          </Typography>
          <Typography align="center">
            <span className={classes.date}>23.08.2019</span>
          </Typography>
          <div className={classes.dialogHeader}>
            <Typography
              className={cx(classes.fwBold, classes.fsOblique, classes.mr1)}
            >
              Вы
            </Typography>
            <Typography component="span">15:10</Typography>
          </div>
          <div className={classes.dialogContent}>
            <img src="images/chat-doc.jpg" alt="document" />
          </div>
          <div className={classes.dialogHeader}>
            <Typography
              className={cx(classes.fwBold, classes.fsOblique, classes.mr1)}
            >
              Алина - менеджер
            </Typography>
            <Typography component="span">15:13</Typography>
          </div>
          <div className={classes.dialogContent}>
            <Typography>
              Текст сообщения. Большой тескт сообщения который занимает от до
              четырех строчек. Текст может быть любого содержания на любое
              количество букв.
            </Typography>
          </div>
          <div className={classes.dialogHeader}>
            <Typography
              className={cx(classes.fwBold, classes.fsOblique, classes.mr1)}
            >
              Вы
            </Typography>
            <Typography component="span">15:15</Typography>
          </div>
          <div className={classes.dialogContent}>
            <Typography>Текст сообщения. </Typography>
          </div>
          <div className={classes.dialogHeader}>
            <Typography
              className={cx(classes.fwBold, classes.fsOblique, classes.mr1)}
            >
              Вы
            </Typography>
            <Typography component="span">15:17</Typography>
          </div>
          <div className={classes.dialogContent}>
            <Typography>Текст сообщения. Текст на одну строчку</Typography>
          </div>

          <Toolbar className={classes.toolbar}>
            <IconButton>
              <Add fontSize="large" />
            </IconButton>

            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                className={classes.fsOblique}
              >
                Введите текст
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <Send />
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={120}
              />
            </FormControl>
          </Toolbar>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default Chat;
