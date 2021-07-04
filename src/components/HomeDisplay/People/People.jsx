import React from "react";
import { useState } from "react";
import "../../../scss/_cardPeople.scss";
import { peopleImage } from "../../../data/imgPeople";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import useStyles from "./styles";

function People(props) {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  return (
    <Card className={`people-card ${classes.peopleCard}`}>
      <CardMedia
        className="cover"
        image={peopleImage[1].src}
        title={props.name}
      />
      <CardActionArea>
        <div className="person-details">
          <CardContent className={`person-content ${classes.personContent}`}>
            <Typography gutterBottom variant="h6" gutterBottom>
              {props.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {props.gender}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {props.birth_year}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {show
                ? peopleImage[0].info
                : `${peopleImage[0].info.substring(0, 50)}...`}
              <button
                className="read-more-btn"
                size="small"
                onClick={() => setShow(!show)}
              >
                {show ? "show less" : "  read more"}
              </button>
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default People;
