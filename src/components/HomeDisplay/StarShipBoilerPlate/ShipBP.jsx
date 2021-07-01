import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import useStyles from "./style";
import { ssImages } from "../../../data/imgSS";
import "../../../scss/_shipBP.scss";
import CardShip from "./CardShip";

const card = [0, 1, 2, 3, 4, 5];

const ShipBP = ({ starShip }) => {
  return (
    <Container maxWidth="md" className="starship-container">
      <Grid container spacing={4}>
        {ssImages.map((image, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CardShip {...image} />
            </Grid>
          );
        })}
      </Grid>
      <Container maxWidth="sm" className="btn-holder">
        <Button variant="outlined" color="standard" className="more-btn">
          View more
        </Button>
      </Container>
    </Container>
  );
};

export default ShipBP;
