import React from "react";
import { useState } from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import "../../../scss/_cardPeople.scss";
import { peopleImage } from "../../../data/imgPeople";

function People(props) {
  return (
    <Card className="people-card">
      <CardMedia
        className="cover"
        image={peopleImage[0].src}
        // image={peopleImage[props.index].src}
        title="Live from space album cover"
      />
      <div className="person-details">
        <CardContent className="person-content">
          <Typography className="person-name">{props.name}</Typography>
          <Typography className="person-subinfo">{props.gender}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default People;
