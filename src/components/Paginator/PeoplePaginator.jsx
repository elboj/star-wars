import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid, Box, Button } from "@material-ui/core";
import Heading from "../Heading/Heading";
import People from "../HomeDisplay/People/People";
import PC from "./PaginationControl/PC";

function PeoplePaginator({
  people,
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
  let currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  let totalPages = Math.ceil(people.length / postsPerPage);
  const allGender = ["all", ...new Set(people.map((person) => person.gender))];
  const [selected, setSelected] = useState("all");

  const filtered = (query) => {
    let filteredList = people.filter((person) => person.gender === query);
    currentPosts = filteredList.slice(indexOfFirstPost, indexOfLastPost);
    totalPages = Math.ceil(filteredList.length / postsPerPage);
  };

  return (
    <div>
      <Heading name="Popular People" />
      <Box display="flex" justifyContent="center" mt={2} pb={5}>
        <Button>Filter By</Button>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            console.log(selected);
          }}
        >
          {allGender.map((gender, index) => {
            return (
              <option value={gender} key={index}>
                {gender}
              </option>
            );
          })}
        </select>
      </Box>
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {selected === "all" &&
            currentPosts.map((person, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={6}>
                  <People {...person} randNumb={randNumb} />
                </Grid>
              );
            })}
          {
            (selected !== "all" && filtered(selected),
            currentPosts.map((person, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={6}>
                  <People {...person} randNumb={randNumb} />
                </Grid>
              );
            }))
          }
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
