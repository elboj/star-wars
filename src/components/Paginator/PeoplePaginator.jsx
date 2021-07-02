import React from "react";
import { Container, Grid } from "@material-ui/core";
import Heading from "../Heading/Heading";
import People from "../HomeDisplay/People/People";
import { Pagination } from "@material-ui/lab";

function PeoplePaginator({ people, totalPages, currentPage, handleChange }) {
  return (
    <div>
      <Heading name="Popular People" />
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {people.map((person, index) => {
            const { name, gender } = person;
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <People name={name} gender={gender} index={index} />
              </Grid>
            );
          })}
        </Grid>
        {/* <Pagination count={10} page={page} onChange={handleChange} /> */}
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
