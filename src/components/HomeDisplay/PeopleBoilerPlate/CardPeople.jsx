import React from "react";
import { useState } from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import "../../../scss/_cardPeople.scss";

// lorem, src, results, index, info;

const CardPeople = (props) => {
  console.log(props.results[props.index].name);
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="people-card">
      <div className="person-details">
        <CardContent className="person-content">
          <Typography className="person-name">
            {props.results[props.index].name}
          </Typography>
          <Typography className="person-subinfo">
            {props.results[props.index].gender}
          </Typography>
          <Typography className="person-info">
            {readMore ? props.info : `${props.info.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className="cover"
        image={props.src}
        title="Live from space album cover"
      />
    </Card>
  );
};

export default CardPeople;
