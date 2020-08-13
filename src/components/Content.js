import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SeasonNoveltys from "./SeasonNoveltys";
import SpecialOffer from "./SpecialOffer";
import {
  About,
  FittingInfo,
  MobileLinks,
  SocialLinks,
  EmailSubscription,
} from "./About";
import Article from "./Article";
import ProductSearch from "./ProductSearch";
import BuyerForm from "./BuyerForm";
import MyOrders from "./MyOrders";
import MyCart from "./MyCart";
import ProductPreview from "./ProductPreview";
import BrandList from "./BrandList";
import Chat from "./Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'url("images/tambourine.svg") repeat fixed',
    backgroundSize: 50,
    marginTop: 64,
    padding: `${theme.spacing(3)}px 0`,

    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Chat />
      <BrandList />
      <ProductPreview />
      <MyCart />
      <MyOrders />
      <BuyerForm />
      <ProductSearch />
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <SeasonNoveltys />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <Article />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <SpecialOffer />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <About />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <FittingInfo />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <MobileLinks />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <SocialLinks />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8} xl={7}>
          <EmailSubscription />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
