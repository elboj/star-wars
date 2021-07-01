import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import "../../../scss/_cardShip.scss";

const CardShip = ({ src, title }) => {
  console.log(src);
  return (
    <Card className="card">
      <CardMedia image={src} className="card-media" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography>
          This is a media card you can use this media to describe the content
        </Typography>
      </CardContent>
      <CardActions className="action">
        <Button
          className="button"
          variant="contained"
          color="primary"
          href="#contained-buttons"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardShip;
