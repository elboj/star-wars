import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import People from "../HomeDisplay/People/People";
import PC from "./PaginationControl/PC";

function PeoplePaginator({
  people,
  setPeople,
  currentPage,
  indexOfFirstPost,
  indexOfLastPost,
  postsPerPage,
  handleChange,
  randNumb,
}) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(people.length / postsPerPage);

  return (
    <div>
      <Heading name="Popular People" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {currentPosts.map((person, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <People {...person} randNumb={randNumb} />
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

export default PeoplePaginator;
