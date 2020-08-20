import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import StandartContainer from "./StandartContainer";
import ProductItem from "./ProductItem";
import mockData from "../mocks";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    marginRight: theme.spacing(2),
  },
}));

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
