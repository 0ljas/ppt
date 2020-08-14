import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import StandartContainer from "./StandartContainer";
import ProductItem from "./ProductItem";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    marginRight: theme.spacing(2),
  },
}));

const mockData = [
  {
    productType: "Ботильоны",
    brandName: "Trewww",
    imgUrl: "images/products/1.webp",
    price: "15 000 тг.",
    sold: true,
    inCart: false,
  },
  {
    productType: "Ботильоны",
    brandName: "Calvin Clein",
    imgUrl: "images/products/3.jpg",
    price: "6 000 тг.",
    sold: false,
    inCart: true,
  },
  {
    productType: "Ботильоны",
    brandName: "Yoourrw",
    imgUrl: "images/products/10.webp",
    price: "106 000 тг.",
    sold: true,
    inCart: false,
  },
  {
    productType: "Ботильоны",
    brandName: "Lopppe",
    imgUrl: "images/products/5.webp",
    price: "15 000 тг.",
    sold: false,
    inCart: false,
  },
  {
    productType: "Ботильоны",
    brandName: "Trewww",
    imgUrl: "images/products/10.webp",
    price: "15 000 тг.",
    sold: false,
    inCart: false,
  },
  {
    productType: "Ботильоны",
    brandName: "Calvin Clein",
    imgUrl: "images/products/9.webp",
    price: "6 000 тг.",
    sold: false,
    inCart: false,
  },
  {
    productType: "Ботильоны",
    brandName: "Yoourrw",
    imgUrl: "images/products/2.webp",
    price: "106 000 тг.",
    sold: false,
    inCart: true,
  },
  {
    productType: "Ботильоны",
    brandName: "Lopppe",
    imgUrl: "images/products/6.jpg",
    price: "15 000 тг.",
    sold: true,
    inCart: false,
  },
];

const ProductSearch = () => {
  const classes = useStyles();

  return (
    <Box px={3}>
      <Grid container alignItems="flex-start">
        <Grid item xs={3} className={classes.filterContainer}>
          <ProductFilter />
        </Grid>
        <Grid item xs={8} xl={7}>
          <ProductSort />
          {/*
            SEARCHED PRODUCTS
           */}
          <StandartContainer
            title="ЗАГЛОВОК БЛОКА ТОВАРОВ"
            badge="35 из 35 товаров"
          >
            <Grid container spacing={3}>
              {mockData.map((item, idx) => (
                <Grid item xs={3}>
                  <ProductItem key={idx} {...item} />
                </Grid>
              ))}
            </Grid>
          </StandartContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductSearch;
