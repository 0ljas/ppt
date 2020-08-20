import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  mediaWrapper: {
    position: "relative",
    marginBottom: theme.spacing(3),
  },
  media: {
    width: 150,
    height: 150,
    margin: "0 auto",
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  lh1: {
    lineHeight: 1,
  },
  mb3: {
    marginBottom: theme.spacing(3),
  },
  sold: {
    position: "absolute",
    bottom: 0,
  },
  p0: {
    padding: 0,
  },
  cardHeader: {
    padding: 0,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ProductItem = ({
  productType,
  brandName,
  imgUrl,
  price,
  sold,
  inCart,
  action,
}) => {
  const classes = useStyles();
  const addToShoppingCart = (evt) => {
    evt.stopPropagation();
  };
  const handleClick = () => {};

  let Action = () => (
    <IconButton onClick={addToShoppingCart}>
      {inCart ? (
        <StarIcon fontSize="large" style={{ color: yellow["700"] }} />
      ) : (
        <StarBorderIcon fontSize="large" />
      )}
    </IconButton>
  );
  if (typeof action === "function") {
    Action = action;
  }

  return (
    <Card elevation={0}>
      <CardActionArea onClick={handleClick} disableRipple>
        <CardHeader action={<Action />} className={classes.cardHeader} />
        <div className={classes.mediaWrapper}>
          <CardMedia
            component="img"
            className={classes.media}
            image={imgUrl}
            title={brandName}
          />
          {sold && (
            <img
              src="images/sold.jpg"
              width="80"
              alt="Sold Product"
              className={classes.sold}
            />
          )}
        </div>
        <CardContent className={classes.p0}>
          <Typography className={cx(classes.fsOblique, classes.lh1)}>
            {productType}
          </Typography>
          <Typography
            className={cx(classes.fwBold, classes.lh1, classes.mb3)}
            variant="h5"
            component="h3"
          >
            {brandName}
          </Typography>
          <Typography variant="h5" component="p" className={classes.fsOblique}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
