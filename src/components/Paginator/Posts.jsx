import React from "react";
import { Link, withRouter } from "react-router-dom";

import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ssImages } from "../../data/imgSS";
import "../../scss/partials/_posts.scss";
import useStyles from "./styles";

function Posts({ searchResult }) {
  console.log(searchResult);
  const classes = useStyles();
  return (
    <Container maxWidth="md" className="post-container" justify="center">
      <Grid container justify="center" spacing={3}>
        {searchResult.length === 0 && (
          <div>
            <Typography variant="h5">Search Results</Typography>
            <Typography variant="subtitle1" align="center">
              {searchResult.length} result found
            </Typography>
            <CardActions>
              <Link to="/">
                <Button size="large" variant="contained" color="secondary">
                  Back to Home
                </Button>
              </Link>
            </CardActions>
          </div>
        )}
        {searchResult.length !== 0 && (
          <div>
            <CardContent>
              <Typography variant="h5">Search Results</Typography>
              <Typography>{searchResult.length} result found</Typography>
            </CardContent>
            {searchResult.map((result, index) => {
              let title = Object.keys(result);
              let answer = Object.values(result);
              return (
                <Grid key={index} item xs={12} sm={12} md={12}>
                  <Card className={`card-post ${classes.planetCard}`}>
                    <CardActionArea>
                      <CardMedia
                        className={`planet-media ${classes.planetMedia}`}
                        height="70"
                        image={ssImages[0].src}
                      />
                      <CardContent>
                        {title.map((key, index) => {
                          return (
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              key={index}
                            >
                              {key}: {answer[index]}
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

export default withRouter(Posts);
