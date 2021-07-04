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

function Posts({
  people,
  starShip,
  search,
  setHide,
  setPG,
  setPHide,
  searchResult,
}) {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" className="post-container">
        <Grid container>
          <Grid item xs={12} sm={6} md={12}>
            <Card className={`${searchResult.length} ? post-card : null`}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">Search Results</Typography>
                  <Typography>{searchResult.length} result found</Typography>
                </CardContent>
                <CardMedia
                  className="cover"
                  height="140"
                  image={
                    searchResult.length > 0
                      ? "https://source.unsplash.com/random"
                      : { unknown }
                  }
                />
                {searchResult.map((result, index) => {
                  let title = Object.keys(result);
                  let answer = Object.values(result);
                  return title.map((x, index) => {
                    return (
                      <CardContent>
                        <Typography variant="subtitle1">
                          {x} -- {answer[index]}
                        </Typography>
                      </CardContent>
                    );
                  });
                })}
              </CardActionArea>
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
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Posts;
