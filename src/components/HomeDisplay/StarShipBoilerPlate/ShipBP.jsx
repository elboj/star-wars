import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { ssImages } from "../../../data/imgSS";
import "../../../scss/_shipBP.scss";
import CardShip from "./CardShip";

const card = [0, 1, 2, 3, 4, 5];

const ShipBP = ({ starShip }) => {
  // console.log(starShip);
  const { results } = starShip;
  return (
    <Container maxWidth="md" className="starship-container">
      <Grid container spacing={4}>
        {card.map((card, index) => {
          return (
            <Grid key={card} item xs={12} sm={6} md={4}>
              <CardShip ssImages={ssImages} results={results} index={index} />
            </Grid>
          );
        })}
      </Grid>
      <Container maxWidth="sm" className="btn-holder">
        <Button variant="outlined" color="primary" className="more-btn">
          View more
        </Button>
      </Container>
    </Container>
  );
};

export default ShipBP;
