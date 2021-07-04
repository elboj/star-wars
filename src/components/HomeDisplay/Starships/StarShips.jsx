import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Grid,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ssImages } from "../../../data/imgSS";
import "../../../scss/_shipBP.scss";
import "../../../scss/_cardShip.scss";
import useStyles from "./styles";

function StarShips({ name, model, cargo_capacity, index }) {
  const classes = useStyles();
  return (
    <div>
      <Card className="root">
        <CardActionArea>
          <CardMedia
            className="ship-media"
            image={ssImages[2].src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              model:{model}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              cargo capacity:{cargo_capacity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default StarShips;
