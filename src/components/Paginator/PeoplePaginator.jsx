import React from "react";
import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import People from "../HomeDisplay/People/People";
import { Pagination } from "@material-ui/lab";
import PeopleFiltered from "./PeopleFiltered";
import PeopleSearch from "./PeopleSearch";

function PeoplePaginator({
  people,
  setPeople,
  categories,
  currentPage,
  indexOfFirstPost,
  indexOfLastPost,
  postsPerPage,
  handleChange,
}) {
  const [peopleIndex, setPeopleIndex] = useState(people);
  const [hide, setHide] = useState(false);
  // console.log(peopleIndex);

  const filterItems = (category) => {
    if (category == "all") {
      setPeople(people);
      return;
    }
    const newPeople = people.filter((person) => person.gender === category);
    setPeopleIndex(newPeople);
  };

  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(people.length / postsPerPage);

  return (
    <div>
      <Heading name="Popular People" />
      <Container maxWidth="md" className="starship-container">
        {/* <PeopleFiltered categories={categories} filterItems={filterItems} /> */}
        <Grid container spacing={4}>
          {currentPosts.map((person, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <People {...person} />
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
        {hide && <PeopleSearch peopleIndex={peopleIndex} />}
      </Container>
    </div>
  );
}

export default PeoplePaginator;
