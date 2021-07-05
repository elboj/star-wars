import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ssImages } from "../../../data/imgSS";
import { Link, withRouter } from "react-router-dom";
import "../../../scss/_starShip.scss";

function StarShips({ name, model, cargo_capacity, randNumb, setRm }) {
  return (
    <div>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="ship-media"
            image={ssImages[1].src}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              model:{model}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              cargo capacity:{cargo_capacity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              atque pariatur delectus deserunt quis facilis, magnam earum sed
              reiciendis esse ab nesciunt voluptate. Numquam minima commodi
              suscipit illum, laudantium amet.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/readmore">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              // onClick={() => {
              //   setRm(true);
              // }}
            >
              Read more
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default withRouter(StarShips);
