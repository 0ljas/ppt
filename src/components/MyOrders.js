import React from "react";
import { Grid } from "@material-ui/core";
import StandartContainer from "./StandartContainer";
import CardLine from "./CardLine";

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

const MyOrders = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="ДАННЫЕ ДЛЯ ПОЛУЧЕНИЯ">
          {mockData.map((item, idx) => {
            return <CardLine key={idx} {...item} />;
          })}
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default MyOrders;
