import React from "react";
import { items } from "../../../data/imgPlanet";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "../../../scss/partials/_carousel.scss";
import useStyles from "./styles";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

function Banner(props) {
  const classes = useStyles();
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item key="content" item xs={12} sm={4} md={4}>
      <CardMedia className={`Media ${classes.media}`} image={props.item.Image}>
        <Typography className={`MediaCaption ${classes.mediaCaption}`}>
          {props.item.Name}
        </Typography>
      </CardMedia>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item item xs={12} sm={4} md={4} key={item.Name}>
        <CardMedia
          className={`Media ${classes.media}`}
          image={item.Image}
          title={item.Name}
        >
          <Typography className={`MediaCaption ${classes.mediaCaption}`}>
            {item.Name}
          </Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={`Banner ${classes.banner}`}>
      <Grid container spacing={2} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

/**
 * The lines of code below are for customizing the carousel
 */

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay,
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators,
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible,
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible,
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation,
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value,
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value,
    });
  }

  render() {
    return (
      <div style={{ color: "#494949" }}>
        <Container maxWidth="md">
          <Carousel
            className="Example"
            autoPlay={this.state.autoPlay}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
            cycleNavigation={this.state.cycleNavigation}
            navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
            navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          >
            {items.map((item, index) => {
              return (
                <Banner
                  item={item}
                  key={index}
                  contentPosition={item.contentPosition}
                />
              );
            })}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default BannerExample;
