import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import StandartContainer from "./StandartContainer";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    borderWidth: 2,
    borderColor: "inherit",
    borderRadius: 0,
    fontStyle: "oblique",
  },
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
        <Button
          type="button"
          size="large"
          variant="outlined"
          className={classes.btn}
        >
          ПОКАЗАТЬ ВСЕ
        </Button>
      </Typography>
    </StandartContainer>
  );
};

export default SeasonNoveltys;
