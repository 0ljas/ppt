import React from "react";
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import cx from "classnames";
import CheckableCardLine from "./CheckableCardLine";

const mockData = [
  {
    imgUrl: "images/products/9.webp",
    productName: "Короткое синее платье",
    brandName: "GUCCI",
    oldPrice: "90 000 тг.",
    price: "70 000 тг.",
  },
  {
    imgUrl: "images/products/6.jpg",
    productName: "Длинное черное пальто",
    brandName: "ARMANI",
    oldPrice: "190 000 тг.",
    price: "130 000 тг.",
  },
  {
    imgUrl: "images/products/5.webp",
    productName: "Красная кофта",
    brandName: "DOLCE&GABANN",
    oldPrice: "55 000 тг.",
    price: "26 000 тг.",
  },
];

const useStyles = makeStyles((theme) => ({
  menuItem: {
    padding: `0 ${theme.spacing(1)}px`,
    fontStyle: "oblique",
  },
  input: {
    width: 100,
    padding: `0 ${theme.spacing(1)}px`,
  },
  mx2: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: `${theme.spacing(1)}px 0`,
    "& > p": {
      fontStyle: "oblique",
      fontSize: theme.typography.pxToRem(15),
    },
  },
  detailsText: {
    fontStyle: "oblique",
    fontSize: theme.typography.pxToRem(15),
  },
  price: {
    fontSize: "2rem",
    lineHeight: 1,
    fontWeight: 500,
    fontStyle: "oblique",
  },
  btn: {
    borderWidth: 2,
    borderColor: "inherit",
    borderRadius: 0,
    fontStyle: "oblique",
  },
}));

const MyCart = () => {
  const classes = useStyles();

  const [deliveryType, setDeliveryType] = React.useState("");

  const handleChange = (event) => {
    setDeliveryType(event.target.value);
  };
  return (
    <Grid container justify="center">
      <Grid item container xs={10} spacing={2}>
        <Grid item xs={8}>
          <StandartContainer title="Моя Корзина" badge="35 товаров">
            {mockData.map((item, idx) => {
              return <CheckableCardLine key={idx} {...item} />;
            })}
          </StandartContainer>
        </Grid>
        <Grid item xs={4}>
          <StandartContainer
            title="Здрвствуйте, Ярослав!"
            badge="Ваш город: Нур-Султан"
          >
            <FormControl fullWidth className={classes.mx2}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.fsOblique}
              >
                СПОСОБ ДОСТАВКИ
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deliveryType}
                displayEmpty
                onChange={handleChange}
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

            <div className={classes.details}>
              <Typography>Оплата</Typography>
              <Typography>102 000 тг.</Typography>
            </div>
            <div className={classes.details}>
              <Typography>Доставка</Typography>
              <Typography>0 тг.</Typography>
            </div>
            <div className={classes.details}>
              <Typography>Скидка</Typography>
              <Typography>10 000 тг.</Typography>
            </div>
            <Typography className={cx(classes.detailsText, classes.mt3)}>
              Итого к оплате:
            </Typography>
            <Typography className={classes.price}>82 000 тг.</Typography>
            <Button
              type="button"
              size="large"
              fullWidth
              variant="outlined"
              className={cx(classes.btn, classes.mt3)}
            >
              Перейти к оплате
            </Button>
          </StandartContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyCart;
