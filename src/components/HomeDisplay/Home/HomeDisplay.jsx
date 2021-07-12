import React, { useEffect } from "react";
import useStyles from "./styles";
import StarShips from "../Starships/StarShips";
import PlanetBP from "../PlanetBoilerPlate/PlanetBP";
import People from "../People/People";
import { Container, Grid } from "@material-ui/core";
import Heading from "../../Heading/Heading";

const HomeDisplay = ({ starShip, people, randNumb }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const classes = useStyles();
  const shipHomeDisplay = starShip.slice(0, 6);
  const peopleHomeDisplay = people.slice(0, 4);
  return (
    <div>
      <Heading name="Popular Starships" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {shipHomeDisplay.map((ship, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <StarShips {...ship} index={index} randNumb={randNumb} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Heading name="Popular Planets" />
      <PlanetBP />
      <Heading name="Popular People" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {peopleHomeDisplay.map((people, index) => {
            const { name, gender, birth_year } = people;
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <People
                  name={name}
                  gender={gender}
                  birth_year={birth_year}
                  index={index}
                  randNumb={randNumb}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default HomeDisplay;
