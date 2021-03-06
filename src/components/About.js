import React from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import StarIcon from "@material-ui/icons/Star";
import cx from "classnames";
import { Instagram, YouTube, Facebook, Twitter } from "@material-ui/icons";
import Button from "./extends/PPTButton";

const useStyles = makeStyles((theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  mr2: {
    marginRight: theme.spacing(2),
  },
  aiCenter: {
    display: "flex",
    alignItems: "center",
  },
  social: {
    "& svg": {
      fontSize: "5.5rem",
    },
  },
  email: {
    display: "flex",
    alignItems: "center",
  },
  emailInput: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
  emailBtn: {
    minWidth: 300,
  },
}));

const About = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer>
          <Typography align="center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Typography>
          <Typography
            variant="h4"
            component="p"
            color="initial"
            align="center"
            className={classes.fwBold}
          >
            TRIUMPH PRET{bull}A{bull}PORTER
          </Typography>
          <Typography
            variant="body2"
            className={cx(classes.fwBold, classes.mb2)}
            align="center"
          >
            МАГАЗИН ЭЛИТНОЙ ОДЕЖДЫ В НУР-СУЛТАНЕ
          </Typography>
          <Typography align="center">
            <Button>О КОМПАНИИ</Button>
          </Typography>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

const FittingInfo = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="Примерка при доставке  по городу нур-султан">
          <Box className={classes.aiCenter} p={2}>
            <Typography className={classes.mr2}>
              <img src="images/hanger.svg" alt="hanger" width="100" />
            </Typography>
            <Typography variant="body1" className={classes.fsOblique}>
              При заказе курьерской доставки по городу Нур-Султан вы получете
              воможность произвести примерку товара в течении 10-ти минут, и в
              случае если товар вам не подходит - вернуть его абсолютно{" "}
              <span className={classes.fwBold}>БЕСПЛАТНО!</span>
            </Typography>
          </Box>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

const MobileLinks = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="Магазин в твоем смартфоне">
          <Box className={classes.aiCenter} p={2}>
            <Typography className={classes.mr2}>
              <img src="images/tablet.svg" alt="tablet" width="100" />
            </Typography>
            <Typography variant="body1" className={classes.fsOblique}>
              Скачайте и установите мобильное приложение для своего смартфона,
              чтобы комфортно и быстро совершать покупки в нашем магазине!
            </Typography>
          </Box>
          <Typography align="right">
            <img src="images/appstore.png" width="110" alt="App Store Logo" />{" "}
            <img
              src="images/playmarket.png"
              width="110"
              alt="Play Market Logo"
            />
          </Typography>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

const SocialLinks = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer>
          <Typography align="center" className={classes.social}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Typography>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

const EmailSubscription = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer>
          <form className={cx(classes.email, classes.mb2)}>
            <TextField
              label="Ваша почта"
              className={classes.emailInput}
              type="email"
            />
            <Button type="submit" className={classes.emailBtn}>
              ОСТАВАТЬСЯ В ТРЕНДЕ
            </Button>
          </form>
          <Typography variant="body1" className={classes.fsOblique}>
            Оставьте вашу электронную почту, что бы быть в курсе самых
            актуальных новинок, новых статей, блоков, акций и скидок.
          </Typography>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export { About, FittingInfo, MobileLinks, SocialLinks, EmailSubscription };
