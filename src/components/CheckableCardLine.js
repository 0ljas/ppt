import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  IconButton,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import { DeleteOutlineOutlined, StarBorder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
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
  oldPrice: {
    position: "relative",

    "&::after": {
      position: "absolute",
      content: '""',
      left: 0,
      right: 0,
      height: 1,
      top: "50%",
      backgroundColor: theme.palette.text.secondary,
    },
  },
  p3: {
    padding: theme.spacing(3),
  },
  toolbar: {
    marginLeft: "auto",
  },
}));

const CheckableCardLine = ({
  imgUrl,
  productName,
  brandName,
  oldPrice,
  price,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  const handleClickStar = (e) => {
    e.stopPropagation();
  };
  const handleClickDelete = (e) => {
    e.stopPropagation();
  };

  return (
    <Card elevation={0} className={classes.mt2}>
      <CardActionArea disableRipple onClick={handleClick}>
        <div className={classes.root}>
          <Checkbox checked={checked} />
          <div className={classes.mediaWrapper}>
            <CardMedia
              component="img"
              className={classes.media}
              image={imgUrl}
              title={productName}
            />
          </div>
          <CardContent className={classes.p3}>
            <Typography className={cx(classes.fsOblique, classes.lh1)}>
              {productName}
            </Typography>
            <Typography
              className={cx(classes.fwBold, classes.lh1, classes.mb3)}
              variant="h5"
              component="h3"
            >
              от {brandName}
            </Typography>
            <Typography
              color="textSecondary"
              className={cx(classes.fsOblique, classes.oldPrice)}
              component="span"
            >
              {oldPrice}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.fsOblique}
            >
              {price}
            </Typography>
          </CardContent>
          <div className={classes.toolbar}>
            <IconButton onClick={handleClickStar}>
              <StarBorder fontSize="large" />
            </IconButton>
            <IconButton onClick={handleClickDelete}>
              <DeleteOutlineOutlined fontSize="large" />
            </IconButton>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CheckableCardLine;
