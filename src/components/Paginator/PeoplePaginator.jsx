import React from "react";
import { useState } from "react";
import PeoplePagCard from "./PeoplePagCard";
import { Grid, Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import "../../scss/_cardPeople.scss";

const PeoplePaginator = ({ people }) => {
  const { results, count, next } = people;
  console.log(people);
  return (
    <Container maxWidth="md" className="people-container">
      <Grid container spacing={3}>
        {results.map((result, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={6}
              className="people-grid"
            >
              <PeoplePagCard {...result} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PeoplePaginator;
