import React from "react";
import { Grid, Typography } from "@material-ui/core";
import StandartContainer from "./StandartContainer";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import MiniCard from "./MiniCard";
import Button from "./extends/PPTButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(images/mainBg3.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  right: {
    padding: theme.spacing(5),
    paddingRight: theme.spacing(7),
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(10),
    },
    background: "rgba(0, 0, 0, .5)",
    color: theme.palette.background.default,
  },
  left: {
    padding: theme.spacing(5),
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  fzLarge: {
    fontSize: "1.2rem",
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  mb3: {
    marginBottom: theme.spacing(3),
  },
}));

const Article = () => {
  const classes = useStyles();

  return (
    <StandartContainer>
      <Grid container className={classes.root}>
        <Grid
          className={classes.left}
          item
          xs={6}
          container
          alignContent="flex-end"
        >
          <MiniCard
            imgUrl="images/products/4.jpg"
            productName="Наименование"
            brandName="Бренд нейм"
            price="70 000 тг."
          />
        </Grid>
        <Grid item xs={6} className={classes.right}>
          <Typography variant="h5" component="h3" className={classes.mb2}>
            АЛЬМА ДЕЛЬТОРО РАССКАЗАЛА О СВОЕЙ ЛЮБВИ К ТАНЦАМ.
          </Typography>
          <Typography
            variant="body2"
            className={cx(classes.fsOblique, classes.mb3)}
          >
            Статья от 15.09.2019 г.
          </Typography>
          <Typography
            className={cx(classes.fsOblique, classes.fzLarge, classes.mb2)}
          >
            «Я приехала в Лондон учиться современному танцу - стилю
            контемпорари. Лондон - удивительный город, здесь всегда есть место
            экспериментам и лекго найти единомышленников. А еще можно одеваться
            как хочешь, и никто не посмотрит на тебя с удивлением. Я чувствую
            себя свободной, когда танцую, - не нужно думать о проблемах, обо
            всем, что происходит в жизни я обретаю настоящую легкость...
          </Typography>
          <Typography align="center">
            <Button inverse>ЧИТАТЬ ДАЛЕЕ</Button>
          </Typography>
        </Grid>
      </Grid>
    </StandartContainer>
  );
};

export default Article;
