import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import Planet from "../HomeDisplay/Planet/Planet";
import { Pagination } from "@material-ui/lab";

function PlanetPaginator({ planet }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPagePerPost] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = planet.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(planet.length / postsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <Heading name="Popular Planet" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {currentPosts.map((world, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <Planet {...world} />
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
        />
      </Container>
    </div>
  );
}

export default PlanetPaginator;
