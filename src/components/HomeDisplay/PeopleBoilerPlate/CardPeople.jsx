import React from "react";
import { useState } from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import "../../../scss/_cardPeople.scss";

const CardPeople = ({ lorem, src, results, index, info }) => {
  console.log(results[index].name);
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="people-card">
      <div className="person-details">
        <CardContent className="person-content">
          <Typography className="person-name">{results[index].name}</Typography>
          <Typography className="person-subinfo">
            {results[index].gender}
          </Typography>
          <Typography className="person-info">
            {readMore ? info : `${info.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className="cover"
        image={src}
        title="Live from space album cover"
      />
    </Card>
  );
};

export default CardPeople;
