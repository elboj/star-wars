import React from "react";
import "../../../scss/_peopleBP.scss";
import { peopleImage } from "../../../data/imgPeople";
import { Grid, Container } from "@material-ui/core";
import CardPeople from "./CardPeople";

const PeopleBP = ({ people }) => {
  const { results } = people;
  return (
    <Container maxWidth="md" className="people-container">
      <Grid container spacing={3}>
        {peopleImage.map((person, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={6}
              className="people-grid"
            >
              <CardPeople index={index} {...person} results={results} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PeopleBP;
