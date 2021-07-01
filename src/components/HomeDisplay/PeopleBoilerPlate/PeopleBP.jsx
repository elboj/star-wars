import React from "react";
import "../../../scss/_peopleBP.scss";
import { peopleImage } from "../../../data/imgPeople";
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

const PeopleBP = () => {
  return (
    <Container maxWidth="md" className="people-container">
      <Grid container spacing={3}>
        {peopleImage.map((person, index) => {
          const { src } = person;
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={6}
              className="people-grid"
            >
              <Card className="people-card">
                <div className="person-details">
                  <CardContent className="person-content">
                    <Typography className="person-name">
                      Live From Space
                    </Typography>
                    <Typography className="person-subinfo">
                      Mac Miller
                    </Typography>
                    <Typography className="person-info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, cum. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit.
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className="cover"
                  image={src}
                  title="Live from space album cover"
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PeopleBP;
