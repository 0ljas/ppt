import React from "react";
import {
  Box,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import Button from "./extends/PPTButton";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  mt2: {
    marginTop: theme.spacing(2),
  },
  dFlex: {
    display: "flex",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: theme.spacing(4),
    marginRight: theme.spacing(2),
    flexBasis: 350,
    maxWidth: 350,
    minHeight: 200,
    position: "relative",
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: 10,
  },
  cardBack: {
    alignItems: "flex-start",
    "&::before": {
      position: "absolute",
      content: '""',
      top: theme.spacing(3),
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: theme.palette.text.secondary,
    },
  },
  expireDateInput: {
    width: 80,
    textAlign: "right",
  },
  checkboxLabel: {
    fontSize: theme.typography.pxToRem(15),
    fontStyle: "oblique",
  },
}));

const BuyerForm = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="ДАННЫЕ ДЛЯ ПОЛУЧЕНИЯ">
          <Grid container spacing={2} className={classes.mt2}>
            <Grid item xs={4}>
              <TextField fullWidth label="Фамилия" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Имя" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Отчество" />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.mt2}>
            <Grid item xs={4}>
              <TextField fullWidth label="Номер телефона" />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.mt2}>
            <Grid item xs={4}>
              <TextField fullWidth label="Страна назначения" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Район/Область" />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.mt2}>
            <Grid item xs={8}>
              <TextField fullWidth label="Адрес доставки" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label="Дом" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label="Квартира" />
            </Grid>
          </Grid>

          <Box mt={6}>
            <div className={classes.dFlex}>
              <div className={classes.card}>
                <TextField fullWidth label="XXXX-XXXX-XXXX-XXXX" />
                <TextField className={classes.expireDateInput} label="07/06" />
                <TextField fullWidth label="YAROSLAV GUSSAKOV" />
              </div>
              <div className={cx(classes.card, classes.cardBack)}>
                <TextField className={classes.expireDateInput} label="CVV" />
              </div>
            </div>
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="СОХРАНИТЬ ДАННЫЕ КАРТЫ"
              className={classes.checkboxLabel}
            />
          </Box>

          <Typography align="center" className={classes.mt2}>
            <Button>СФОРМИРОВАТЬ ЗАКАЗ</Button>
          </Typography>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default BuyerForm;
