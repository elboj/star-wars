import React from "react";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";

function Heading(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography
        variant="h3"
        align="center"
        className={classes.sectionHeading}
      >
        {props.name}
      </Typography>
      <div className={classes.sectionUnderline}></div>
    </Container>
  );
}

export default Heading;
