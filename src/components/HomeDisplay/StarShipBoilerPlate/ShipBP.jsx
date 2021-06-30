import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import picture from "../../../assets/starship-1.jpg";
import picture2 from "../../../assets/starship-2.jpg";
import picture3 from "../../../assets/starship-3.jpg";
import picture4 from "../../../assets/starship-4.jpg";
import picture5 from "../../../assets/starship-5.jpg";
import picture6 from "../../../assets/starship-6.jpg";

const ssImages = [
  {
    src: picture,
  },
  {
    src: picture2,
  },
  {
    src: picture3,
  },
  {
    src: picture4,
  },
  {
    src: picture5,
  },
  {
    src: picture6,
  },
];

console.log(ssImages[3].src);

const card = [1, 2, 3, 4, 5, 6];
//styling can be found in parent component scss file i.e homeDisplay.scss

const ShipBP = ({ starShip }) => {
  // console.log({ starShip });
  const { count, next, results } = starShip;
  console.log(results[0].name);
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
                    {results[index].name}
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
                    color="primary"
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
    </Container>
  );
};

export default ShipBP;
