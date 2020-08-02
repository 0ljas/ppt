import React from "react";
import { Box, Typography, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(3)}px ${theme.spacing(10)}px`,
    [theme.breakpoints.down("lg")]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  contacts: {
    marginTop: theme.spacing(6),
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  navigation: {
    display: "flex",
    justifyContent: "space-around",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    "& > a": {
      lineHeight: `${theme.spacing(4)}px`,
    },
    "& + h6": {
      marginTop: theme.spacing(1),
    },
  },
  spaceBtwn: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box className={classes.root}>
      <Typography align="center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Typography>
      <Typography
        variant="h5"
        color="initial"
        align="center"
        className={classes.fwBold}
      >
        TRIUMPH PRET{bull}A{bull}PORTER
      </Typography>
      <Typography variant="body2" className={classes.fsOblique} align="center">
        МАГАЗИН ЭЛИТНОЙ ОДЕЖДЫ В НУР-СУЛТАНЕ
      </Typography>

      <Grid container className={classes.contacts}>
        <Grid item xs={3} container direction="column">
          <Typography
            variant="h6"
            component="h2"
            className={cx(classes.mb2, classes.fwBold)}
          >
            НАШИ КОНТАКТЫ:
          </Typography>
          <Box fontStyle="oblique">
            <Typography variant="body1">Единый номер консультации</Typography>
            <Typography variant="h5">+7 (777) 555-66-88</Typography>
          </Box>
        </Grid>
        <Grid item xs={9} container direction="column">
          <Typography
            variant="h6"
            component="h2"
            className={cx(classes.mb2, classes.fwBold)}
          >
            НАШИ ТОЧКИ РЕАЛИЗАЦИИ ПО НУР-СУЛТАНУ:
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Box fontStyle="oblique">
                <Typography variant="body2" className={classes.mb2}>
                  ул.Ахмета Байтурсынова 9, ЖК Highvill,
                  <br />
                  блок F38
                </Typography>
                <Typography variant="h6">+7 (777) 999-88-77</Typography>
                <Typography variant="h6">+7 (777) 666-22-44</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box fontStyle="oblique">
                <Typography variant="body2" className={classes.mb2}>
                  ул.Наименование, ЖК Наименование,
                  <br />
                  Цокольный этаж, со стороны улицы.
                </Typography>
                <Typography variant="h6">+7 (777) 999-88-77</Typography>
                <Typography variant="h6">+7 (777) 666-22-44</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box fontStyle="oblique">
                <Typography variant="body2" className={classes.mb2}>
                  ул.Наименование, ЖК Наименование,
                  <br />
                  Цокольный этаж, со стороны улицы.
                </Typography>
                <Typography variant="h6">+7 (777) 111-33-55</Typography>
                <Typography variant="h6">+7 (777) 555-88-77</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography
          variant="h6"
          component="h2"
          className={cx(classes.mb2, classes.fwBold)}
        >
          НАВИГАЦИЯ ПО САЙТУ:
        </Typography>

        <nav className={classes.navigation}>
          <Box>
            <Typography variant="h6">Основные разделы</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Главная
              </Link>
              <Link href="#" color="inherit">
                Статьи
              </Link>
              <Link href="#" color="inherit">
                О компании
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Каталог</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Общий каталог товаров
              </Link>
              <Link href="#" color="inherit">
                Товары для него
              </Link>
              <Link href="#" color="inherit">
                Товары для нее
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Особые условия</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Эксклюзивы
              </Link>
              <Link href="#" color="inherit">
                Один экземпляр
              </Link>
              <Link href="#" color="inherit">
                Проданные товары
              </Link>
            </Typography>

            <Typography variant="h6">Аутлет</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Товары со скидкой
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Личный кабинет</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Мой профиль
              </Link>
              <Link href="#" color="inherit">
                Моя корзина
              </Link>
              <Link href="#" color="inherit">
                Мои избранные товары
              </Link>
              <Link href="#" color="inherit">
                Мои заказы
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Связь</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Мои сообщения
              </Link>
              <Link href="#" color="inherit">
                Мои уведомления
              </Link>
            </Typography>
            <Typography variant="h6">Помощь</Typography>
            <Typography className={cx(classes.links, classes.fsOblique)}>
              <Link href="#" color="inherit">
                Служба поддержки
              </Link>
              <Link href="#" color="inherit">
                FAQ
              </Link>
            </Typography>
          </Box>
        </nav>
      </Box>

      <Box mt={4}>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Typography className={cx(classes.spaceBtwn, classes.mb2)}>
              <Link href="#" color="inherit" className={classes.fsOblique}>
                Соглашение
              </Link>
              <Link href="#" color="inherit" className={classes.fsOblique}>
                Конфиденциальность
              </Link>
              <Link href="#" color="inherit" className={classes.fsOblique}>
                Правила пользования сайтом
              </Link>
              <Link href="#" color="inherit" className={classes.fsOblique}>
                Лицензия №3026
              </Link>
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              © <span className={classes.fsOblique}>ТОО</span> «Triumph pret a
              porter», <span className={classes.fsOblique}>2013-2019</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
