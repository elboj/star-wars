import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { ssImages } from "../../data/imgSS";
import useStyles from "../Paginator/styles";

function StarShipsRM({ randNumb, shipName }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <Container maxWidth="md" className="post-container" justify="center">
      <Grid container justify="center" spacing={3}>
        <Card className={`card ${classes.planetCard}`}>
          <CardActionArea>
            <CardMedia
              className={`planet-media ${classes.planetMedia}`}
              height="70"
              image={ssImages[randNumb(6)].src}
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {shipName}
            </Typography>
            <Typography variant="body2" align="justify">
              A powerful pursuit craft made famous by Jango Fett in the days of
              the Republic, this ship was inherited by Boba Fett for his career
              as a bounty hunter. The aged but effective ship is loaded with
              hidden defensive and offensive weaponry and equipment, and has a
              reputation earned from decades of successfully capturing. The
              deadly Slave I was infamous for its association with Jango Fett, a
              bounty hunter in Mandalorian armor. Fett packed the craft with
              weapons, from laser cannons and projectile launchers to seismic
              charges. fugitives. A powerful pursuit craft made famous by Jango
              Fett in the days of the Republic, this ship was inherited by Boba
              Fett for his career as a bounty hunter. The aged but effective
              ship is loaded with hidden defensive and offensive weaponry and
              equipment, and has a reputation earned from decades of
              successfully capturing. The deadly Slave I was infamous for its
              association with Jango Fett, a bounty hunter in Mandalorian armor.
              Fett packed the craft with weapons, from laser cannons and
              projectile launchers to seismic charges. fugitives. A powerful
              pursuit craft made famous by Jango Fett in the days of the
              Republic, this ship was inherited by Boba Fett for his career as a
              bounty hunter. The aged but effective ship is loaded with hidden
              defensive and offensive weaponry and equipment, and has a
              reputation earned from decades of successfully capturing. The
              deadly Slave I was infamous for its association with Jango Fett, a
              bounty hunter in Mandalorian armor. Fett packed the craft with
              weapons, from laser cannons and projectile launchers to seismic
              charges. fugitives.
            </Typography>
          </CardContent>
          <Container maxWidth="md" className="starship-container">
            <Grid container spacing={4}>
              <Grid key={1} item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      className="ship-media"
                      image={ssImages[randNumb(1 + 1)].src}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid key={2} item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      className="ship-media"
                      image={ssImages[randNumb(6 - 1)].src}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid key={3} item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      className="ship-media"
                      image={ssImages[randNumb(6 - 2)].src}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Card>
      </Grid>
    </Container>
  );
}

export default StarShipsRM;
