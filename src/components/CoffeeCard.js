import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";

const CoffeeCard = (props) => {
  const { avatarUrl, title, price, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
