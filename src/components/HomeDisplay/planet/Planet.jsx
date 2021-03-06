import React from "react";
import { items } from "../../../data/imgPlanet";
import useStyles from "./styles";
import "../../../scss/partials/_planet.scss";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

function Planet(props) {
  const classes = useStyles();
  return (
    // <h1>Planet Pagination</h1>
    <Container maxWidth="md">
      <Grid container spacing={2} className="BannerGrid">
        <Grid item key="content" item xs={12} sm={12} md={12}>
          <Card className={`planet-card ${classes.planetCard}`}>
            <CardActionArea>
              <CardMedia
                className={`planet-media ${classes.planetMedia}`}
                image={items[props.randNumb(3)].Image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="p">
                  {props.name}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p">
                  Climate type: {props.climate}
                </Typography>
                <p>Population size: {props.population}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Planet;
