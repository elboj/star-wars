import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import People from "../HomeDisplay/People/People";
import { Pagination } from "@material-ui/lab";
import StarShips from "../HomeDisplay/Starships/StarShips";

function PeoplePaginator({ filtered }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPagePerPost] = useState(10);
  useEffect(() => {
    <Pagination />;
  }, [filtered]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  console.log(currentPosts);

  return (
    <div>
      <Heading name="Popular People" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {currentPosts.map((person, index) => {
            console.log(person.hasOwnProperty("gender"));
            if (person.hasOwnProperty("gender")) {
              const { name, gender } = person;
              return (
                <Grid key={index} item xs={12} sm={6} md={6}>
                  <People name={name} gender={gender} index={index} />
                </Grid>
              );
            } else if (person.hasOwnProperty("model")) {
              const { name, model } = person;
              return (
                <Grid key={index} item xs={12} sm={6} md={6}>
                  <StarShips name={name} model={model} index={index} />
                </Grid>
              );
            }
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

export default PeoplePaginator;
