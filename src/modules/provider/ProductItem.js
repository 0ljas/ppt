import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/extends/PPTButton";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
  },
  mb1: {
    marginBottom: theme.spacing(1),
  },
  mr1: {
    marginRight: theme.spacing(1),
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
  media: {
    margin: "0 auto",
  },
  mediaWrapper: {
    display: "flex",
    width: 150,
    height: 150,
    padding: theme.spacing(2),
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  color1: {
    color: theme.palette.warning.main,
  },
  color3: {
    color: theme.palette.success.main,
  },
  smallText: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

const ProductItem = ({ imgUrl, productName, brandName, price, status }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.mt2}>
      <div className={classes.root}>
        <div className={classes.mediaWrapper}>
          <CardMedia
            component="img"
            className={classes.media}
            image={imgUrl}
            title={productName}
          />
        </div>
        <CardContent>
          <Typography>{`${productName} от ${brandName} - цена ${price}`}</Typography>
          <Typography className={cx(classes.fwBold, classes.mb1)}>
            Статус:{" "}
            <span className={classes[`color${status.code}`]}>
              {status.label}
            </span>
          </Typography>
          {status.code === 1 && (
            <>
              <Button className={classes.mr1}>Подтвердить наличие</Button>
              <Button>Отклонить заказ</Button>
            </>
          )}
          {status.code === 2 && (
            <>
              <Button>Удалить товар</Button>
            </>
          )}
          {status.info && (
            <Typography className={classes.smallText}>{status.info}</Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductItem;
