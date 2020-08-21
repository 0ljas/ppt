import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Button as MuiButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Container from "../../components/StandartContainer";
import Button from "../../components/extends/PPTButton";
import ProductItem from "../../components/ProductItem";
import NavLeft from "./NavLeft";
import mockData from "../../mocks";

const useStyles = makeStyles((theme) => ({
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  mt2: {
    marginTop: theme.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreBtn: {
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const EditItem = () => (
  <IconButton>
    <EditOutlinedIcon fontSize="large" />
  </IconButton>
);

const Goods = () => {
  const classes = useStyles();
  const links = [
    { label: "На модарации", count: 10 },
    { label: "Отклоненные", count: 100 },
    { label: "Подтвежденные", count: 1000 },
    { label: "Проданные", count: 10 },
    { label: "Удаленные", count: 10 },
  ];
  return (
    <Grid container justify="center">
      <Grid item xs={10} spacing={2} container className={classes.root}>
        <Grid item xs={3}>
          <NavLeft links={links} action />
        </Grid>
        <Grid item xs={9}>
          <Container>
            <Box className={classes.header} mb={1}>
              <div>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.fwBold}
                >
                  МОИ ТОВАРЫ
                </Typography>
                <Typography variant="body1" className={classes.fsOblique}>
                  35 из 35 товаров
                </Typography>
              </div>
              <Button>Добавить товары</Button>
            </Box>
            <Grid container spacing={3}>
              {mockData.map((item, idx) => (
                <Grid item xs={3}>
                  <ProductItem key={idx} {...item} action={EditItem} />
                </Grid>
              ))}
            </Grid>
            <Typography align="center" className={classes.mt2}>
              <MuiButton size="large" className={classes.moreBtn}>
                Показать ёще
              </MuiButton>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Goods;
