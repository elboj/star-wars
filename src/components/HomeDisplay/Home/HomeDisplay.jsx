import React from "react";
// import ShipBP from "../StarShipBoilerPlate/ShipBP";
import PlanetBP from "../PlanetBoilerPlate/PlanetBP";
// import PeopleBP from "../PeopleBoilerPlate/PeopleBP";
import PeoplePaginator from "../../Paginator/PeoplePaginator";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const HomeDisplay = () => {
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
    </div>
  );
};

export default HomeDisplay;
