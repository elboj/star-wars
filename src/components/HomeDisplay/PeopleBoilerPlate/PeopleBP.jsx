import React from "react";
import "../../../scss/_peopleBP.scss";
import { peopleImage } from "../../../data/imgPeople";
import { Grid, Container } from "@material-ui/core";
import CardPeople from "./CardPeople";

const lorem =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const PeopleBP = ({ people }) => {
  const { results } = people;
  return (
    <Container maxWidth="md" className="people-container">
      <Grid container spacing={3}>
        {peopleImage.map((person, index) => {
          const { src, info } = person;
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={6}
              className="people-grid"
            >
              <CardPeople
                lorem={lorem}
                {...person}
                results={results}
                index={index}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PeopleBP;
