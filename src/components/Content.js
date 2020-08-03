import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "./StandartContainer";
import Card from "./Card";

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
      <StandartContainer title="Новинки сезона" badge="35 товаров">
        <div style={{ display: "flex", flexShrink: 0 }}>
          <Card
            productType="Ботильоны"
            brandName="Trewww"
            imgUrl="images/products/1.webp"
            price="15000 тг"
          />
          <Card
            productType="Ботильоны"
            brandName="Calvin Clein"
            imgUrl="images/products/9.webp"
            price="6000 тг"
          />
          <Card
            productType="Ботильоны"
            brandName="Yoourrw"
            imgUrl="images/products/10.webp"
            price="106000 тг"
          />
          <Card
            productType="Ботильоны"
            brandName="Lopppe"
            imgUrl="images/products/5.webp"
            price="15000 тг"
          />
        </div>
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
    </Box>
  );
};

export default Content;
