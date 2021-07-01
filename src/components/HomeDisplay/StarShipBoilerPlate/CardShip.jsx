import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import "../../../scss/_cardShip.scss";

const CardShip = ({ ssImages, results, index }) => {
  return (
    <Card className="card">
      <CardMedia image={ssImages[index].src} className="card-media" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {results[index].name}
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          natus.
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
