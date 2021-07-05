import React from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import Planet from "../HomeDisplay/Planet/Planet";
import PC from "./PaginationControl/PC";

function PlanetPaginator({
  planet,
  currentPage,
  indexOfFirstPost,
  indexOfLastPost,
  postsPerPage,
  handleChange,
  randNumb,
}) {
  const currentPosts = planet.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(planet.length / postsPerPage);

  return (
    <div>
      <Heading name="Popular Planet" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {currentPosts.map((world, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <Planet {...world} randNumb={randNumb} />
              </Grid>
            );
          })}
        </Grid>
        <PC
          totalPages={totalPages}
          currentPage={currentPage}
          handleChange={handleChange}
        />
      </Container>
    </div>
  );
}

export default PlanetPaginator;
