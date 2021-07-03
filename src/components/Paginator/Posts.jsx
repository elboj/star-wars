import React from "react";
import People from "../HomeDisplay/People/People";
import StarShips from "../HomeDisplay/Starships/StarShips";
import { Container, Grid } from "@material-ui/core";
const Posts = ({
  people,
  starShip,
  search,
  setHide,
  setPG,
  setPHide,
  searchResult,
}) => {
  return (
    <div>
      <Container maxWidth="md" className="starship-container">
        <Grid container spacing={4}>
          {searchResult.map((result, index) => {
            if (result.hasOwnProperty("model")) {
              const { name, model, index } = result;
              return (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <StarShips name={name} index={index} />;
                </Grid>
              );
            }
            if (result.hasOwnProperty("gender")) {
              const { name, gender, index } = result;
              return (
                <Grid item key={index} xs={12} sm={6} md={6}>
                  <People name={name} index={index} />;
                </Grid>
              );
            }
            if (result.hasOwnProperty("climate")) {
              const { name, climate, index } = result;
              return (
                <Grid item key={index} xs={12} sm={6} md={6}>
                  {/* <People name={name} index={index} />; */}
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
      <button
        type="button"
        onClick={() => {
          setHide(true);
          setPHide(true);
          setPG(false);
        }}
      >
        back to home
      </button>
    </div>
  );
};

export default Posts;
