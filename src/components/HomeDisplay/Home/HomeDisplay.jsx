import React from "react";
import useStyles from "./styles";
import StarShips from "../Starships/StarShips";
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

const HomeDisplay = ({ starShip }) => {
  const shipHomeDisplay = starShip.slice(0, 6);
  console.log(shipHomeDisplay);
  return (
    <Container maxWidth="md" className="starship-container">
      <Grid container spacing={4}>
        {shipHomeDisplay.map((ship) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <StarShips {...ship} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HomeDisplay;
