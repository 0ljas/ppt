import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: 0,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  media: {
    margin: "0 auto",
    width: 300,
    height: 260,
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  lh1: {
    lineHeight: 1,
  },
  mb3: {
    marginBottom: theme.spacing(3),
  },
  oldPrice: {
    position: "relative",

    "&::after": {
      position: "absolute",
      content: '""',
      left: 0,
      right: 0,
      height: 1,
      top: "50%",
      backgroundColor: theme.palette.text.secondary,
    },
  },
}));

const SpecialOffer = () => {
  const classes = useStyles();

  return (
    <StandartContainer
      title="Специальное предложение - только для вас!"
      badge="Разовая акция"
    >
      <Grid container spacing={4}>
        <Grid item xs={5}>
          <Card elevation={0}>
            <CardActionArea disableRipple>
              <CardHeader
                action={
                  <IconButton>
                    <Star fontSize="large" style={{ color: yellow["700"] }} />
                  </IconButton>
                }
                className={classes.cardHeader}
              />
              <CardMedia
                component="img"
                className={classes.media}
                image="images/products/1.webp"
                title="Product"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Box pt={3}>
            <Typography className={cx(classes.fsOblique, classes.lh1)}>
              Ботильоны
            </Typography>
            <Typography
              className={cx(classes.fwBold, classes.lh1, classes.mb3)}
              variant="h5"
              component="h3"
            >
              Trewww
            </Typography>
            <Typography
              color="textSecondary"
              className={cx(classes.fsOblique, classes.oldPrice)}
              component="span"
            >
              98 000 тг
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={cx(classes.fsOblique, classes.mb3)}
            >
              70 000 тг.
            </Typography>
            <Typography className={classes.fsOblique}>
              Дорогой, Ярослав!
              <br />
              Спасибо, что вы все это время с нами!
              <br />
              Мы видим, что вы очень часто заходите в раздел Жакеты
              <br />
              Поэтому мы дарим вам уникальное
              <br />
              предложение приобрести эксклюзивный товар
              <br />
              со скидкой только для вас!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </StandartContainer>
  );
};

export default SpecialOffer;
