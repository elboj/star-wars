import React from "react";
import People from "../HomeDisplay/People/People";
import StarShips from "../HomeDisplay/Starships/StarShips";
import Planet from "../HomeDisplay/Planet/Planet";
import { Container, Grid } from "@material-ui/core";
import unknown from "../../assets/unknown.png";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
// import "../../scss/_cardPeople.scss";
import "../../scss/_posts.scss";
import useStyles from "../HomeDisplay/People/styles";

function Posts({ setHide, setPG, setPHide, searchResult }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className="post-container">
      <Grid container>
        {searchResult.map((result, index) => {
          let title = Object.keys(result);
          let answer = Object.values(result);
          return (
            <Grid key={index} item xs={12} sm={6} md={6}>
              {title.map((x, index) => {
                return (
                  <Card className={`${searchResult.length} ? post-card : null`}>
                    <CardContent>
                      <Typography variant="subtitle1">
                        {x} -- {answer[index]}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Grid>
          );
        })}
        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => {
              setHide(true);
              setPHide(true);
              setPG(false);
            }}
          >
            Back to Home
          </Button>
        </CardActions>
      </Grid>
    </Container>
  );
}

export default Posts;
