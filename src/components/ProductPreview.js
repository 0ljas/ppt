import React from "react";
import {
  Typography,
  Button,
  Grid,
  Paper,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  media: {
    maxWidth: "100%",
    height: "auto",
  },
  mediaContainer: {
    "& > div": {
      display: "flex",
    },
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
  p4: {
    padding: theme.spacing(4),
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fwRegular: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  fwMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  lh1: {
    lineHeight: 1.1,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: theme.spacing(2),
  },
  badges: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    marginBottom: theme.spacing(2),
    padding: 0,
    listStyle: "none",

    "& > li": {
      textTransform: "uppercase",
      fontStyle: "oblique",
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.background.default,
      backgroundColor: theme.palette.text.primary,
      padding: `0 ${theme.spacing(1)}px`,
      marginRight: theme.spacing(1),
    },
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
  btn: {
    borderWidth: 2,
    borderColor: "inherit",
    borderRadius: 0,
    fontStyle: "oblique",
  },
}));

const ProductPreview = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid container item xs={10} spacing={2}>
        <Grid
          container
          item
          xs={8}
          className={classes.mediaContainer}
          spacing={1}
        >
          <Grid item xs={4}>
            <img
              className={classes.media}
              src="images/products/big1.webp"
              alt="Product name "
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.media}
              src="images/products/big2.webp"
              alt="Product name "
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.media}
              src="images/products/big3.webp"
              alt="Product name "
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.media}
              src="images/products/big4.webp"
              alt="Product name "
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.media}
              src="images/products/big5.jpg"
              alt="Product name "
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.media}
              src="images/products/big6.jpg"
              alt="Product name "
            />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Paper square elevation={6} className={classes.p4}>
            <div className={classes.titleContainer}>
              <div>
                <Typography
                  variant="h6"
                  component="h2"
                  className={cx(
                    classes.fsOblique,
                    classes.fwRegular,
                    classes.lh1
                  )}
                >
                  Товар нейм
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  className={cx(classes.fwBold, classes.lh1)}
                >
                  от БРЕНД НЕЙМ
                </Typography>
              </div>
              <IconButton>
                <StarIcon fontSize="large" style={{ color: yellow["700"] }} />
              </IconButton>
            </div>
            <ul className={classes.badges}>
              <li>Экзклюзив</li>
              <li>Новый сезон</li>
            </ul>
            <Typography
              color="textSecondary"
              className={cx(classes.fsOblique, classes.oldPrice)}
              component="span"
            >
              98 000 тг.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={cx(classes.fsOblique, classes.fwMedium)}
            >
              70 000 тг.
            </Typography>

            <FormControl fullWidth className={classes.mt2}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.fsOblique}
              >
                ВЫБЕРИТЕ РАЗМЕР
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                displayEmpty
                className={classes.menuItem}
              >
                <MenuItem value={10} className={classes.menuItem}>
                  С доставкой
                </MenuItem>
                <MenuItem value={20} className={classes.menuItem}>
                  Без доставки
                </MenuItem>
              </Select>
            </FormControl>
            <Typography align="right" className={classes.fwMedium}>
              Таблица размеров
            </Typography>

            <Button
              type="button"
              size="large"
              fullWidth
              variant="outlined"
              className={cx(classes.btn, classes.mt3)}
            >
              ДОБАВИТЬ В КОРЗИНУ
            </Button>
            <Typography className={cx(classes.fsOblique, classes.mt2)}>
              Короткое платье с поясом и логотипом GG от Gucci(Гуччи). Коротие
              рукава, планка на пуговицах спереди, ремень на талии, передние
              карманы с клапанами, длина по колено и классический воротник.
            </Typography>
            <Typography className={cx(classes.fsOblique, classes.mt2)}>
              Страна производства:
            </Typography>
            <Typography className={classes.fwBold}>Италия</Typography>
            <Typography className={cx(classes.fsOblique, classes.mt2)}>
              Состав:
            </Typography>
            <Typography className={classes.fwBold}>
              Наружный Материал: Хлопок 100%, Кожа Теленка 100%, Шерсть 51%,
              Шелк 49%
            </Typography>
            <Typography className={cx(classes.fsOblique, classes.mt2)}>
              Подкладка:
            </Typography>
            <Typography className={classes.fwBold}>
              Ацетат 73%, Шелк 27%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductPreview;
