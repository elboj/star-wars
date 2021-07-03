import React from "react";
import { items } from "../../../data/imgPlanet";
import "../../../scss/_planetBP.scss";
import useStyles from "./styles";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

function Planet() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} className="BannerGrid">
        <Grid item key="content" item xs={12} sm={4} md={4}>
          <Card>
            <CardMedia
              className={`Media ${classes.media}`}
              image={items[0].src}
            >
              <Typography className={`MediaCaption ${classes.mediaCaption}`}>
                {props.name}
              </Typography>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Planet;
