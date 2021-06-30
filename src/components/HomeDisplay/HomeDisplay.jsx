import React from "react";
import ShipBP from "./StarShipBoilerPlate/ShipBP";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./hdstyle";

const HomeDisplay = ({ starShip }) => {
  // console.log({ starShip });
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Typography variant="h2" align="center">
          Popular Starships
        </Typography>
        <div className="hd-underline"></div>
      </Container>
      <ShipBP starShip={starShip} />
      {/* <Container maxWidth="md" className={classes.container}>
        <Typography variant="h2" align="center">
          Popular Starships
          <div className="hd-underline"></div>
        </Typography>
        <ShipBP starShip={starShip} />
      </Container> */}
    </div>
  );
};

export default HomeDisplay;
