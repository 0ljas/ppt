import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../../components/StandartContainer";
import ProductItem from "./ProductItem";
import NavLeft from "./NavLeft";

const useStyles = makeStyles((theme) => ({
  fsOblique: {
    fontStyle: "oblique",
  },
  mt2: {
    marginTop: theme.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreBtn: {
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const mockData = [
  {
    imgUrl: "images/products/9.webp",
    productName: "Короткое синее платье",
    brandName: "GUCCI",
    oldPrice: "90 000 тг.",
    price: "70 000 тг.",
    status: {
      code: 1,
      label: "Ожидает ответа поставщика",
    },
  },
  {
    imgUrl: "images/products/6.jpg",
    productName: "Длинное черное пальто",
    brandName: "ARMANI",
    oldPrice: "190 000 тг.",
    price: "130 000 тг.",
    status: {
      code: 2,
      label: "Заказ отклонен",
    },
  },
  {
    imgUrl: "images/products/5.webp",
    productName: "Красная кофта",
    brandName: "DOLCE&GABANN",
    oldPrice: "55 000 тг.",
    price: "26 000 тг.",
    status: {
      code: 3,
      label: "Ожидает курьера",
      info:
        "Прибудет с 28.05.2020 по 27.05.2020 с 9:00 по 18:00 \n по адресу: Магазин «Надежда», улица Комсомолов 36, дом 65",
    },
  },
  {
    imgUrl: "images/products/2.webp",
    productName: "Короткое синее платье",
    brandName: "GUCCI",
    oldPrice: "90 000 тг.",
    price: "70 000 тг.",
    status: {
      code: 4,
      label: "Продан",
      info: "Продан 28.05.2020",
    },
  },
];

const Goods = () => {
  const classes = useStyles();
  const links = [
    { label: "Все запросы", count: 10 },
    { label: "Активные запросы", count: 100 },
    { label: "Отклоненные запросы", count: 1000 },
    { label: "Процесс доставки", count: 10 },
    { label: "Переданные товары", count: 10 },
    { label: "Процесс возврата", count: 0 },
  ];
  return (
    <Grid container justify="center">
      <Grid item xs={10} spacing={2} container className={classes.root}>
        <Grid item xs={3}>
          <NavLeft links={links} />
        </Grid>
        <Grid item xs={9}>
          <Container title="Мои заказы" badge="Поставщик товара">
            {mockData.map((item, idx) => {
              return <ProductItem key={idx} {...item} />;
            })}
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Goods;
