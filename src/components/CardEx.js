import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "../constants";

const CardEx = () => (
  <Grid container spacing={4}>
    {/* {coffeeMakerList.map((item, idx) => (
      <Grid item xs={12} sm={4} key={idx}>
        <CoffeeCard {...item} />
      </Grid>
    ))} */}
  </Grid>
);

export default CardEx;
