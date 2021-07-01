import React from "react";
import ShipBP from "../StarShipBoilerPlate/ShipBP";
import PlanetBP from "../PlanetBoilerPlate/PlanetBP";
import PeopleBP from "../PeopleBoilerPlate/PeopleBP";
import PeoplePaginator from "../../Paginator/PeoplePaginator";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const HomeDisplay = ({ starShip, people }) => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Typography
          variant="h3"
          align="center"
          className={classes.sectionHeading}
        >
          Popular Starships
        </Typography>
        <div className="hd-underline"></div>
      </Container>
      <ShipBP starShip={starShip} />
      <Container className={classes.container}>
        <Typography
          variant="h3"
          align="center"
          className={classes.sectionHeading}
        >
          Popular Planets
        </Typography>
        <div className="hd-underline"></div>
      </Container>
      <PlanetBP />
      <Container className={classes.container}>
        <Typography
          variant="h3"
          align="center"
          className={classes.sectionHeading}
        >
          Popular People
        </Typography>
        <div className="hd-underline"></div>
      </Container>
      <PeopleBP people={people} />
      {/* <PeoplePaginator people={people} /> */}
    </div>
  );
};

export default HomeDisplay;
