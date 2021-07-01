import React from "react";
import { useState } from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import "../../../scss/_cardPeople.scss";

const CardPeople = ({ lorem, src }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="people-card">
      <div className="person-details">
        <CardContent className="person-content">
          <Typography className="person-name">Live From Space</Typography>
          <Typography className="person-subinfo">Mac Miller</Typography>
          <Typography className="person-info">
            {readMore ? lorem : `${lorem.substring(0, 20)}...`}
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
