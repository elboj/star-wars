import React from "react";
import { useState } from "react";
import "../../../scss/partials/_cardPeople.scss";
import { peopleImage } from "../../../data/imgPeople";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

function People(props) {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  return (
    <Card className={`people-card ${classes.peopleCard}`}>
      <CardMedia
        className="cover"
        image={peopleImage[props.randNumb(4)].src}
        title={props.name}
      />
      <CardActionArea>
        <div className="person-details">
          <CardContent className={`person-content ${classes.personContent}`}>
            <Typography gutterBottom variant="h6" gutterBottom>
              {props.name}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {props.gender}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {props.birth_year}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {show
                ? peopleImage[0].info
                : `${peopleImage[0].info.substring(0, 50)}...`}
              <Button
                className="read-more-btn"
                size="small"
                onClick={() => setShow(!show)}
              >
                {show ? "show less" : "  read more"}
              </Button>
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default People;
