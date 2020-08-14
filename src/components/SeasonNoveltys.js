import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import Card from "./Card";
import Button from "./extends/PPTButton";

const useStyles = makeStyles((theme) => ({
  mt5: {
    marginTop: theme.spacing(5),
  },
}));

const SeasonNoveltys = () => {
  const classes = useStyles();

  return (
    <StandartContainer title="Новинки сезона" badge="35 товаров">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card
            productType="Ботильоны"
            brandName="Trewww"
            imgUrl="images/products/1.webp"
            price="15 000 тг."
            sold
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            productType="Ботильоны"
            brandName="Calvin Clein"
            imgUrl="images/products/9.webp"
            price="6 000 тг."
            inCart
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            productType="Ботильоны"
            brandName="Yoourrw"
            imgUrl="images/products/10.webp"
            price="106 000 тг."
            sold
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            productType="Ботильоны"
            brandName="Lopppe"
            imgUrl="images/products/5.webp"
            price="15 000 тг."
          />
        </Grid>
      </Grid>
      <Typography align="center" className={classes.mt5}>
        <Button>ПОКАЗАТЬ ВСЕ</Button>
      </Typography>
    </StandartContainer>
  );
};

export default SeasonNoveltys;
