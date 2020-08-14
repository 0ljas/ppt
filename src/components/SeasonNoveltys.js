import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import ProductItem from "./ProductItem";
import Button from "./extends/PPTButton";

const useStyles = makeStyles((theme) => ({
  mt5: {
    marginTop: theme.spacing(5),
  },
}));

const mockData = [
  {
    imgUrl: "images/products/1.webp",
    productType: "Ботильоны",
    brandName: "GUCCI",
    price: "15 000 тг.",
    sold: true,
    inCart: false,
  },
  {
    imgUrl: "images/products/9.webp",
    productType: "Ботильоны",
    brandName: "CALVIN CLAIN",
    price: "6 000 тг.",
    sold: false,
    inCart: true,
  },
  {
    imgUrl: "images/products/10.webp",
    productType: "Ботильоны",
    brandName: "DOLCE&GABANN",
    price: "26 000 тг.",
    sold: true,
    inCart: false,
  },
  {
    imgUrl: "images/products/5.webp",
    productType: "Ботильоны",
    brandName: "ARMANI",
    price: "15 000 тг.",
    sold: true,
    inCart: false,
  },
];

const SeasonNoveltys = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="Новинки сезона" badge="35 товаров">
          <Grid container spacing={3}>
            {mockData.map((item, idx) => (
              <Grid key={idx} item xs={3}>
                <ProductItem {...item} />
              </Grid>
            ))}
          </Grid>
          <Typography align="center" className={classes.mt5}>
            <Button>ПОКАЗАТЬ ВСЕ</Button>
          </Typography>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default SeasonNoveltys;
