import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import { ssImages } from "../../../data/imgSS";
import "../../../scss/_shipBP.scss";

const card = [0, 1, 2, 3, 4, 5];

const ShipBP = ({ starShip }) => {
  const { count, next, results } = starShip;
  const classes = useStyles();
  return (
    <Container maxWidth="md" className="container">
      <Grid container spacing={4}>
        {card.map((card, index) => {
          return (
            <Grid key={card} item xs={12} sm={6} md={4}>
              <Card className="card">
                <CardMedia image={ssImages[index].src} className="card-media" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6">
                    {/* {results[index].name} */}
                    {/* read note pad to see the reason for the error */}
                  </Typography>
                  <Typography>
                    This is a media card you can use this media to describe the
                    content
                  </Typography>
                </CardContent>
                <CardActions className="action">
                  <Button
                    className="button"
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Container maxWidth="sm" className="btn-holder">
        <Button
          variant="outlined"
          color="black"
          className="more-btn"
          // startIcon={<DeleteIcon />}
        >
          View more
        </Button>
      </Container>
    </Container>
  );
};

export default ShipBP;
