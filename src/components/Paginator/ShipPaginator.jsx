import React from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import StarShips from "../HomeDisplay/Starships/StarShips";
import PC from "./PaginationControl/PC";

function ShipPaginator({
  starShip,
  currentPage,
  indexOfFirstPost,
  indexOfLastPost,
  postsPerPage,
  handleChange,
  randNumb,
  setRm,
}) {
  const currentPosts = starShip.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(starShip.length / postsPerPage);

  return (
    <div>
      <Heading name="Popular Starships" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {currentPosts.map((ship, index) => {
            const { name, model } = ship;
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <StarShips
                  name={name}
                  model={model}
                  index={index}
                  randNumb={randNumb}
                  setRm={setRm}
                />
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

export default ShipPaginator;
