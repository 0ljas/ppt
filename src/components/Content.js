import React from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import Card from "./Card";
import {
  About,
  FittingInfo,
  MobileLinks,
  SocialLinks,
  EmailSubscription,
} from "./About";

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

const Content = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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

      <StandartContainer
        title="Специальное предложение - только для вас!"
        badge="Разовая акция"
      >
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
          voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
          tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
          fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
          totam temporibus?
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
          voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
          tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
          fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
          totam temporibus?
        </Typography>
        <Typography variant="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
          voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
          tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
          fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
          totam temporibus?
        </Typography>
      </StandartContainer>

      <About />
      <FittingInfo />
      <MobileLinks />
      <SocialLinks />
      <EmailSubscription />
    </Box>
  );
};

export default Content;
