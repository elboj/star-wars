import React from "react";
import { Container, Grid } from "@material-ui/core";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
import "../../scss/_posts.scss";
import useStyles from "../HomeDisplay/People/styles";

function Posts({ setSearch, setHide, setPG, setPHide, searchResult }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className="post-container" justify="center">
      <Grid container justify="center">
        {searchResult.length === 0 && (
          <div>
            <Typography variant="h5">Search Results</Typography>
            <Typography variant="subtitle1" align="center">
              {searchResult.length} result found
            </Typography>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => {
                  setHide(true);
                  setPHide(true);
                  setPG(false);
                  setSearch("");
                }}
              >
                Back to Home
              </Button>
            </CardActions>
          </div>
        )}
        {searchResult.length !== 0 && (
          <div>
            {searchResult.map((result, index) => {
              let title = Object.keys(result);
              let answer = Object.values(result);
              const { name, model } = result;
              return (
                <Grid key={index} item xs={12} sm={12} md={12}>
                  <Card className="card">
                    <CardActionArea>
                      <CardMedia
                        className="planet-media"
                        height="70"
                        image={"https://source.unsplash.com/random"}
                      />
                      <CardContent>
                        {title.map((x, index) => {
                          return (
                            <Typography variant="subtitle2">
                              {x}:{answer[index]}
                            </Typography>
                          );
                        })}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default Posts;
