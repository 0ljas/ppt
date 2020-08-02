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

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    width: 200,
  },
});

export default function MediaCard({ productType, brandName, imgUrl, price }) {
  const classes = useStyles();
  const addToShoppingCart = (evt) => {
    evt.stopPropagation();
  };

  const handleClick = () => {
    console.log("hhhhhey");
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        action={
          <IconButton disableRipple onClick={addToShoppingCart}>
            <StarBorderIcon />
          </IconButton>
        }
      />
      <CardActionArea style={{ width: 300 }} onClick={handleClick}>
        <CardMedia
          component="img"
          className={classes.media}
          image={imgUrl}
          title={brandName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {productType}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {brandName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
