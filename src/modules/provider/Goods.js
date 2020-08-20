import React from "react";
import {
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
  Button as MuiButton,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "../../components/StandartContainer";
import Button from "../../components/extends/PPTButton";
import ProductItem from "../../components/ProductItem";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import cx from "classnames";
import mockData from "../../mocks";

const useStyles = makeStyles((theme) => ({
  root: {},
  p1: {
    padding: theme.spacing(1),
  },
  mb1: {
    marginBottom: theme.spacing(1),
  },
  mb3: {
    marginBottom: theme.spacing(3),
  },
  mt2: {
    marginTop: theme.spacing(3),
  },
  mtAuto: {
    marginTop: "auto",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  heading: {
    padding: `${theme.spacing(1 / 2)}px ${theme.spacing(1)}px`,
    marginBottom: theme.spacing(1),
  },
  links: {
    display: "flex",
    flexDirection: "column",
    minHeight: 500,
    "& > a": {
      padding: `${theme.spacing(1 / 2)}px ${theme.spacing(1)}px`,
      display: "flex",
      justifyContent: "space-between",
    },

    "& > a:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.2),
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreBtn: {
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

  return (
    <Grid container justify="center">
      <Grid item xs={10} spacing={2} container className={classes.root}>
        <Grid item xs={3}>
          <Container>
            <Typography variant="h6" className={classes.heading}>
              Разделы
            </Typography>

            <Typography className={classes.links}>
              <Link underline="none" color="inherit" href="#">
                На модарации <span className={classes.fwBold}>10</span>
              </Link>
              <Link underline="none" color="inherit" href="#">
                Отклоненные <span className={classes.fwBold}>100</span>
              </Link>
              <Link underline="none" color="inherit" href="#">
                Подтвежденные <span className={classes.fwBold}>1000</span>
              </Link>
              <Link underline="none" color="inherit" href="#">
                Проданные <span className={classes.fwBold}>10</span>
              </Link>
              <Link underline="none" color="inherit" href="#">
                Удаленные <span className={classes.fwBold}>10</span>
              </Link>
              <Button className={cx(classes.mtAuto, classes.mb3)}>
                Отфильтровать товар
              </Button>
            </Typography>
          </Container>
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
