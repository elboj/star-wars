import React from "react";
import { useState } from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import { peopleImage } from "../../data/imgPeople";
import "../../scss/_cardPeople.scss";

const PeoplePagCard = (props) => {
  const [readMore, setReadMore] = useState(false);
  let randNum = Math.floor(Math.random() * 4);
  return (
    <Card className="people-card">
      <div className="person-details">
        <CardContent className="person-content">
          <Typography className="person-name">{props.name}</Typography>
          <Typography className="person-subinfo">{props.gender}</Typography>
          <Typography className="person-info">
            {readMore
              ? peopleImage[1].info
              : `${peopleImage[1].info.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className="cover"
        image={peopleImage[3].src}
        title="Live from space album cover"
      />
    </Card>
  );
};

export default PeoplePagCard;
