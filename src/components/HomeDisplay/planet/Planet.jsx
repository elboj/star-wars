import React from "react";
import { items } from "../../../data/imgPlanet";
import "../../../scss/_planetBP.scss";
import useStyles from "./styles";
import "../../../scss/_planet.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

function Planet(props) {
  console.log(props);
  const classes = useStyles();
  return (
    // <h1>Planet Pagination</h1>
    <Container maxWidth="md">
      <Grid container spacing={2} className="BannerGrid">
        <Grid item key="content" item xs={12} sm={4} md={4}>
          <Card className="root">
            <CardMedia className="planet-media" image={items[0].Image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="p">
                {props.name}
              </Typography>
              <p>{props.climate}</p>
              <p>{props.population}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Planet;
