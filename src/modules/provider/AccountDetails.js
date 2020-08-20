import React from "react";
import { Box, Grid, Typography, Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "../../components/StandartContainer";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  m3: {
    margin: `${theme.spacing(3)}px 0`,
    marginBottom: theme.spacing(6),
  },
  rowPadding: {
    padding: `${theme.spacing(1 / 2)}px 0`,
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    textTransform: "capitalize",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const AccountDetails = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer
          title="Данные учетной записи"
          badge="Поставщик товара"
        >
          <Grid container className={classes.m3}>
            <Grid item xs={10}>
              <Box>
                <div className={cx(classes.header, classes.rowPadding)}>
                  <Typography className={classes.fwBold}>
                    Безопасность
                  </Typography>
                  <MuiButton size="large" className={classes.btn}>
                    Изменить
                  </MuiButton>
                </div>
                <Grid container className={classes.rowPadding}>
                  <Grid item xs={3}>
                    <Typography>Пароль</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      Изменен 28.05.2020 года
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <div className={cx(classes.header, classes.rowPadding)}>
                  <Typography className={classes.fwBold}>
                    Личные данные
                  </Typography>
                  <MuiButton size="large" className={classes.btn}>
                    Изменить
                  </MuiButton>
                </div>
                <Grid container className={classes.rowPadding}>
                  <Grid item xs={3}>
                    <Typography>Номер телефона</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      +7 702 591 94 26
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.rowPadding}>
                  <Grid item xs={3}>
                    <Typography>Компания</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      ТОО «HULIO-PADRE»
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.rowPadding}>
                  <Grid item xs={3}>
                    <Typography>Имя представителя</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      Хулио Падре Гонсалес
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.rowPadding}>
                  <Grid item xs={3}>
                    <Typography>Контакты</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      Село Жеруйык 356, юрта №3
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <div className={cx(classes.header, classes.rowPadding)}>
                  <Typography className={classes.fwBold}>
                    Точки реализации
                  </Typography>
                  <MuiButton size="large" className={classes.btn}>
                    Добавить точку
                  </MuiButton>
                </div>
                <Grid
                  container
                  alignItems="center"
                  className={classes.rowPadding}
                >
                  <Grid item xs={3}>
                    <Typography>Адрес точки №1</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      Магазин «Надежда», улица Комсомолов 36, дом 5
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="right">
                      <MuiButton size="large" className={classes.btn}>
                        Изменить
                      </MuiButton>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.rowPadding}>
                  <Grid item xs={3}>
                    <Typography>Контакты</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.fwBold}>
                      +7 7172 98 45 45 - спросить Серика
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default AccountDetails;
