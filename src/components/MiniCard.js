import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@material-ui/core";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },
  media: {
    width: 100,
    height: 100,
    margin: "0 auto",
  },
  mediaWrapper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  fsOblique: {
    fontStyle: "oblique",
  },
  fwBold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  cardContent: {
    padding: 0,
    paddingTop: theme.spacing(1),
  },
  lh1: {
    lineHeight: 1,
  },
  productName: {
    padding: theme.spacing(1) / 2,
    marginBottom: theme.spacing(1),
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.primary,
  },
  price: {
    padding: theme.spacing(1) / 2,
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.primary,
  },
}));

const MiniCard = ({ imgUrl, productName, brandName, price }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} square className={classes.root}>
      <CardActionArea>
        <Box className={classes.mediaWrapper}>
          <CardMedia
            component="img"
            className={classes.media}
            image={imgUrl}
            title={productName}
          />
        </Box>

        <CardContent className={classes.cardContent}>
          <Box className={classes.productName}>
            <Typography
              className={cx(classes.fsOblique, classes.lh1)}
              variant="body1"
            >
              {productName}
            </Typography>
            <Typography className={classes.fwBold}>
              {brandName.toUpperCase()}
            </Typography>
          </Box>
          <Typography
            className={cx(classes.fsOblique, classes.price)}
            component="span"
          >
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MiniCard;
