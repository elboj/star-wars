import React from "react";
import "../../../scss/_peopleBP.scss";
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
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className="people-card">
            <div className="person-details">
              <CardContent className="person-content">
                <Typography component="h5" variant="h5">
                  Live From Space
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Mac Miller
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className="cover"
              image="https://source.unsplash.com/random"
              title="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PeopleBP;
