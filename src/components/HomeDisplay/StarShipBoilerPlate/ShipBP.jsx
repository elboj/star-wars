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

const card = [0, 1, 2, 3, 4, 5];
//styling can be found in parent component scss file i.e homeDisplay.scss

const ShipBP = ({ starShip }) => {
  const { count, next, results } = starShip;
  // console.log(results[0].name);
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={4}>
        {card.map((card, index) => {
          return (
            <Grid key={card} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  image={ssImages[index].src}
                  className={classes.cardMedia}
                />
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
                <CardActions className={classes.action}>
                  <Button
                    className={classes.button}
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
      <Container maxWidth="sm" className={classes.btnHolder}>
        <Button
          variant="outlined"
          color="black"
          className={classes.rmButton}
          // startIcon={<DeleteIcon />}
        >
          View more
        </Button>
      </Container>
    </Container>
  );
};

export default ShipBP;
