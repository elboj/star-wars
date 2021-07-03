import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import People from "../HomeDisplay/People/People";
import StarShips from "../HomeDisplay/Starships/StarShips";
import { Pagination } from "@material-ui/lab";

function ShipPaginator({ starShip }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPagePerPost] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = starShip.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(starShip.length / postsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <Heading name="Popular Starships" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {currentPosts.map((ship, index) => {
            const { name, model } = ship;
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <StarShips name={name} model={model} index={index} />
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

export default ShipPaginator;
