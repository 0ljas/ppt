import React from "react";
import { Box } from "@material-ui/core";
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
// provider
import MyGoods from "../modules/provider/Goods";
import AccountDetails from "../modules/provider/AccountDetails";
import OrderList from "../modules/provider/OrderList";
import CreateGoods from "../modules/provider/CreateGoods";

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
      <CreateGoods />
      <OrderList />
      <AccountDetails />
      <MyGoods />
      <Chat />
      <BrandList />
      <ProductPreview />
      <MyCart />
      <MyOrders />
      <BuyerForm />
      <ProductSearch />
      <SeasonNoveltys />
      <Article />
      <SpecialOffer />
      <About />
      <FittingInfo />
      <MobileLinks />
      <SocialLinks />
      <EmailSubscription />
    </Box>
  );
};

export default Content;
